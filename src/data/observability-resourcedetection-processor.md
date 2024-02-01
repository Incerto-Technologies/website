---
title: "Resource Detection Processor in OpenTelemetry Collector"
meta_title: "observability"
description: "observability"
date: 2023-11-18T00:00:00Z
image: "/images/blog/opentelemetry.png"
categories: ["Observability"]
author: "Shiva Pundir"
tags: ["observability", "opentelemetry"]
draft: false
---

<br>

### **Introduction**
OpenTelemetry has become a cornerstone in the world of observability, offering a versatile set of tools to collect, process, and export telemetry data. One of the crucial components that enrich the observability experience is the Resource Detection Processor. In this blog post, we'll explore how to leverage the Resource Detection Processor in the OpenTelemetry Collector for more insightful and context-rich telemetry data.

The Resource Detection Processor is a vital element within the OpenTelemetry Collector that automatically identifies and extracts information about the underlying environment in which your applications are running. This includes details about the host system, the runtime environment, and other contextual information that enhances the richness of your telemetry data.

### **Configuration**
The config for `resourcedetection` processor looks something like this -
```yaml
resourcedetection/env:
  detectors:
    - env
  timeout: 2s
  override: false
```
Here we are using the `env` as the detector, therefore we will need to populate the attributes (key-values) in the ENV variable `OTEL_RESOURCE_ATTRIBUTES` of the host, e.g.
```bash
OTEL_RESOURCE_ATTRIBUTES="os.type=linux,host.name=<host_name>,service.name=<service_name>,service.version=<service_version>,custom_attribute=<custom_value>"
```

Find the full settings for `resourcedetection` processor [here](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourcedetectionprocessor).

### **Conclusion**
The Resource Detection Processor in the OpenTelemetry Collector is a powerful tool for automatically enriching your telemetry data with contextual information about the environment in which your applications are running. By leveraging this processor, you empower your observability stack with additional insights, making it easier to pinpoint issues, understand dependencies, and optimize performance. 

Thats it for today. Cheers!
