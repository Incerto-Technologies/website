---
title: "OpenTelemetry Filelog Receiver In Action"
meta_title: "observability"
description: "observability"
date: 2023-11-25T00:00:00Z
image: "/images/blog/opentelemetry.png"
categories: ["Observability"]
author: "Shiva Pundir"
tags: ["observability", "opentelemetry"]
draft: false
---

<br>

### **Introduction**
One of the key components of observability is the ability to collect logs effectively. [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main) makes this task easier with its [Filelog receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/filelogreceiver), which allows you to ingest logs from files and integrate them into your observability pipeline.


### **Configuration**
Install OpenTelemetry Collector from [here](https://opentelemetry.io/docs/collector/installation/). 

Lets try to read and ingest logs from a file `service.log`, to which a service is writing its logs. A snippet from the log might look something like this:
```json
{"level":"info","extra":"QUERY failed to execute;","requestId":"c1af64f5-6319-4141-963a-3f825a5e52fb","clientId":"","location":"data_rest/develop/controllers.SetCurrentExpirySymbol[common_internal_functions.go:257]","time":"2023-11-26T01:00:04Z","message":"Running sql query","traceId":"c3c9c07ca97c250fb3ffc68282ed74b6","spanId":"38e385d29314a402"}
{"level":"error","extra":{"file":"example.csv"},"requestId":"c1a56rf5-1319-4141-963a-67825a5e52fb","clientId":"","error":"NoSuchBucket: The specified bucket does not exist\n\tstatus code: 404, request id: CJ17XTVR3WYCTF3V, host id: Wbd299NWLJBOhb2K284JOxfZb/Ycp9uFRoY5eh9/NlQGpeua01Fda5IWNKqooPERa/pmeYbliWE=","location":"data_rest/develop/controllers.Downloadfroms3.func1[symbol_master_s3.go:94]","time":"2023-11-26T01:00:05Z","message":"Unable to download file","traceId":"","spanId":""}
{"level":"debug","extra":"","requestId":"c1af64f5-6319-4141-963a-3f825a5e52fb","clientId":"","location":"data_rest/develop/controllers.Downloadfroms3.func1[symbol_master_s3.go:96]","time":"2023-11-26T01:00:05Z","message":"Downloaded file","traceId":"c3c9c07ca97c250fb3ffc68282ed7499","spanId":"38e385d29314a4f5"}
{"level":"error","extra":"","requestId":"c1af64f5-6319-4141-963a-3f825a5e52fb","clientId":"","error":"NoSuchBucket: The specified bucket does not exist\n\tstatus code: 404, request id: CJ15V6NSWCBY7535, host id: rowBpQpTw7jXZBoAvWL4sIIRaMEA5oH8zVG/E5nyRUKh9bEtL3fB4Yg6Z6IVB2nto1O8ZqggX6U=","location":"data_rest/develop/controllers.Downloadfroms3.func1[symbol_master_s3.go:94]","time":"2023-11-26T01:00:05Z","message":"Unable to download file","traceId":"","spanId":""} 
```

Now to read every line as a single entry, and appropriately populate the `service.name`, `service.version`, `body`, `attributes`, `severity`, `timestamp`, `span_id`, `trace_id` and other fields, we define a filelog receiver with following operators -
```yaml
filelog/service:
    include:
      - service.log
    start_at: end
    operators:
      # add service.name
      - type: add
        field: resource["service.name"]
        value: 'EXPR(env("OTEL_SERVICE_NAME"))'
      # add service.version
      - type: add
        field: resource["service.version"]
        value: 'EXPR(env("OTEL_SERVICE_VERSION"))'
      # filter out GIN DEBUG logs
      - type: filter
        expr: 'body matches "GIN"'
      - type: filter
        expr: 'body matches "gin"'
      - type: filter
        expr: 'body matches "INF"'
      # parse the log as JSON
      - type: json_parser
      # add raw field
      - type: add
        field: attributes["raw"]
        value: 'EXPR(body)'
      # overwrite body with actual log message
      - type: add
        field: body
        value: 'EXPR(attributes["message"])'
      # substitute traceID and spanID
      - type: trace_parser
        trace_id:
          parse_from: attributes["traceId"]
        span_id:
          parse_from: attributes["spanId"]
      # parse and update severity_text and severity_number
      - type: severity_parser
        parse_from: attributes["level"]
        preset: default
      # parse and update timestamp
      - type: time_parser
        parse_from: attributes["time"]
        layout: "%Y-%m-%dT%H:%M:%S.%LZ"
```

This produces an OTLP log entry which looks something like this :
```json
{
  "Timestamp": "2023-11-26T01:00:04Z",
  "ObservedTimestamp": "2023-11-26T01:00:05Z",
  "TraceId": "c3c9c07ca97c250fb3ffc68282ed74b6",
  "SpanId": "38e385d29314a402",
  "SeverityText": "ERROR",
  "SeverityNumber": "17",
  "Body": "Running sql query",
  "Resource": {
    "service.name": "service",
    "service.version": "v1"
  },
  "Attributes": {
    "level": "info",
    "extra": "QUERY failed to execute;",
    "requestId": "c1af64f5-6319-4141-963a-3f825a5e52fb",
    "clientId": "",
    "location": "data_rest/develop/controllers.SetCurrentExpirySymbol[common_internal_functions.go:257]",
    "time": "2023-11-26T01:00:04Z",
    "traceId":"c3c9c07ca97c250fb3ffc68282ed74b6",
    "spanId":"38e385d29314a402"
  }
}
```

Depending on the use case, you can use various other [operators](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/filelogreceiver) to customize the data you are trying to collect and export.

Thats it for today!
