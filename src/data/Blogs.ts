export type Blog = {
  title: string;
  meta_title: string;
  description: string;
  date: string;
  image: string;
  categories: string[];
  author: string;
  tags: string[];
  draft: false;
  markdown: string;
  profile?: string;
};

export const Tags = ["all", "linux", "observability"];

export type SearchTag = "all" | "linux" | "observability" | null;

export const Blogs: Blog[] = [
  {
    title: "Observability",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-03T05:00:00Z",
    image: "/images/blog/grafana-screenshot.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "grafana", "opentelemetry", "clickhouse"],
    draft: false,
    markdown: `# **What is observability ?**
    Generally speaking, observability is the extent to which you can understand the internal state or condition of a complex system based only on knowledge of its external outputs. But in IT and cloud computing observability also refers to software tools and practices for aggregating, correlating and analyzing a steady stream of performance data from a distributed application along with the hardware and network it runs on, in order to more effectively monitor, troubleshoot and debug the application and the network to meet customer experience expectations, service level agreements (SLAs) and other business requirements. The data associated with this is called "telemetry data".
    ### **Telemetry Data Types**
    
    \`\`\`markdown
    **Metrics:**
    Metrics are aggregated measurements that indicate how your service is performing. Common examples include the rate at which your service produces errors, the number of total requests your service sees within a given timeframe, and the time it takes your service to respond to a request. Each of these metric measurements are aggregated over some period of time, and the aggregated measurement is reported in your observability platform.
    
    **Logs:**
    Logs are the oldest and most basic of telemetry data types. They are arbitrary, timestamped text records, useful for debugging or understanding something specific about the system at a given time. For instance, you might log a message with some variable values from somewhere in your code that’s running slowly.
    
    **Traces:**
    Traces are the most modern telemetry data type, but also the most advanced of the bunch. A trace is a collection of hierarchically-related spans. Spans represent activities within applications. Each span contains timestamps for when it started and when it stopped. It contains attributes that describe features of the operation it represents, and it can even contain events that occur during the course of the operation. Traces are also effective at capturing details across network boundaries, which is important for monitoring modern computing systems.
    \`\`\`
    
    ### **Use Cases**

    #### **#1 Indian Brokerage Firm**
    
    ##### **Problem**
    
    The client wanted an end-to-end observability solution tailored to their high-speed, low-latency infrastructure. This encompassed a diverse range of components, including on-cloud microservices written in Go, C++ & Python, on-prem microservices written in C++, as well as vendor-managed services like serverless, MSK, RDS, ElastiCache, and more. In addition, the solution was needed to be flexible enough to incorporate data from other telemetry nodes such as network devices, active directories, storage blobs etc.  
    A few of the problems faced by the client in their own words:
    
    - "our observability system lacked traces. MTTD was decent but MTTR was very high"
    - "the loki exporter was dropping chunks of logs when the traffic was high"
    - "correlating low cardinality telemetry data amongst different services was difficult"
    - "vendor solution were very difficult to scale esp with the unpredictable pricing"
    - "telemetry data retention for 10 years + quick aggregation"
    
    ##### **Solution**
    
    We implemented a comprehensive solution leveraging only open source solutions, which was hosted on their own infrastructure. Our approach involved:
    
    - [OpenTelemetry](https://opentelemetry.io/) to instrument, generate, collect and export telemetry data.
    - [ClickHouse](https://clickhouse.com/) cluster to store and retain billions of rows of telemetry data.
    - [Grafana](https://grafana.com/) for visualization, analysis and alerting.
    
    We also built additional scripts in Python to get telemetry data from AWS specific resources like ELB, MSK, RDS, ElastiCache etc
    <br>
    
    #### **\#2 American Financial Institution**
    
    ##### **Problem**
    
    The client initially relied on a vendor-specific observability setup centered around Datadog. They utilized the Datadog agent for collection and export of telemetry data. However, due to the unpredictability of Datadog's pricing, they sought to transition toward a vendor-agnostic approach. Their plan involved prioritizing the migration of their EKS and RDS infrastructure in alignment with their specific requirements, with the intention to address other components subsequently.  
    A few excerpts from the conversation:
    
    - "we need to filter out telemetry data belonging to sensitive tables"
    - "telemetry data from EU pods and replicas shouldn't be collected"
    - "redact PII to specific values from a set of lookup tables"
    - "additional metrics, which are specific to AWS, to be collected and pipelined"
    
    ##### **Solution**
    
    We implemented a comprehensive solution leveraging only open source solutions, which was hosted on their own infrastructure. Our approach involved:
    
    - [OpenTelemetry](https://opentelemetry.io/) to instrument, generate, collect and export telemetry data.
    - [Cribl](https://cribl.io/) to parallely process, filter, aggregate large amounts of telemetry data.
    - [Datadog](https://www.datadoghq.com/) for visualization, analysis and alerting.
    `,
  },
  {
    title: "Leveraging Persistent Storage for OpenTelemetry OTLP Exporters",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-18T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: `
    ### **Introduction**
    
    By default, OpenTelemetry OTLP exporters (and other exporters too) send telemetry data directly to the specified endpoint. While this is effective in many scenarios, there are situations where transient network issues or destination unavailability may result in the loss of telemetry data.
    
    To address this, OpenTelemetry provides an option to use persistent storage for the exporter. With persistent storage enabled, the exporter writes the telemetry data to local storage first before attempting to transmit it to the destination. This ensures that the data is retained in case of network interruptions, and the exporter can continue the transmission once the connectivity is restored.
    
    ### **Benefits of Persistent Storage**
    
    Enabling persistent storage for your OpenTelemetry OTLP exporter offers several benefits:
    
    - Reliability: Data is stored locally, reducing the risk of data loss during network interruptions.
    - Flexibility: You can choose where to store the data, allowing you to leverage existing storage solutions or customize based on your infrastructure.
    - Recovery: In the event of a transmission failure, the exporter can resume sending data once connectivity is restored, ensuring no telemetry data is left behind.
    
    ### **Configuration**
    
    The config for \`OTLP\` exporter and \`file storage\` extension might look something like this-
\`\`\`yaml
    otlp:
      endpoint: \${env:OTEL_COLLECTOR_ENDPOINT}
      tls:
        insecure: true
      retry_on_failure:
        enabled: true
        initial_interval: 5s
        max_interval: 30s
        max_elapsed_time: 3600s
      sending_queue:
        enabled: true
        num_consumers: 10
        queue_size: 10000
        storage: file_storage/otlp
      timeout: 5s
      \`\`\`
    
      \`\`\`
    file_storage/otlp:
      directory: /var/lib/otelcol/file_storage
      timeout: 1s
      \`\`\`

    Find the full settings for OTLP exporter [here](https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/exporterhelper/README.md) and for file storage extension [here](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/storage/filestorage).
    
    ### **Conclusion**
    
    By incorporating persistent storage for OTLP exporters in your OpenTelemetry Collector configuration, you enhance the durability and scalability of your telemetry data. This ensures that your observability efforts remain robust and reliable, providing valuable insights into your applications' performance over time. Explore the documentation of your chosen storage system and the OpenTelemetry Collector for advanced configurations and optimizations.
    
    Happy exporting!
    `,
  },
  {
    title:
      "Using OpenTelemetry's HTTP Check Receiver for Enhanced Observability",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-25T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: `

<br>
    ### **Introduction**
    
    In the realm of observability, OpenTelemetry stands out as a powerful framework for collecting and managing telemetry data from applications. One critical aspect of this process is health checking, and OpenTelemetry offers a straightforward solution through its HTTP Check Receiver. In this blog post, we'll delve into how to utilize the HTTP Check Receiver with the OpenTelemetry Collector to enhance the observability of your systems.
    
    ### **The Importance of Health Checks**
    
    Health checks play a vital role in ensuring the reliability and availability of your services. By regularly probing your applications and infrastructure, you can detect potential issues early, prevent downtime, and maintain a robust observability strategy.
    
    ### **Configuration**
    
    A very simple \`httpcheck\` receiver config might look something like this -
    
    \`\`\`yaml
    httpcheck:
      targets:
        - endpoint: http://localhost:8080/health_check
          method: GET
      collection_interval: 60s
    \`\`\`
    
    Here, the collector is running on the same node as the service, and thus able to ping the health check endpoint i.e \`health_check\` at port \`8080\`. You can find the complete list of settings [here](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/httpcheckreceiver).
    
    ### **Conclusion**
    
    Integrating the HTTP Check Receiver into your OpenTelemetry Collector configuration allows you to seamlessly incorporate health checks into your observability strategy. Regularly monitoring the health of your services enhances your ability to detect and resolve issues promptly, ensuring a resilient and highly available system. As you explore OpenTelemetry's capabilities, consider incorporating health checks for a comprehensive observability solution.
    
    Happy Observing!
    `,
  },
  {
    title: "OpenTelemetry Filelog Receiver In Action",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-25T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: `

<br>
    ### **Introduction**
    
    One of the key components of observability is the ability to collect logs effectively. [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main) makes this task easier with its [Filelog receiver](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/filelogreceiver), which allows you to ingest logs from files and integrate them into your observability pipeline.
    
    ### **Configuration**
    
    Install OpenTelemetry Collector from [here](https://opentelemetry.io/docs/collector/installation/).
    
    Lets try to read and ingest logs from a file \`service.log\`, to which a service is writing its logs. A snippet from the log might look something like this:
    
    \`\`\`json
    {"level":"info","extra":"QUERY failed to execute;","requestId":"c1af64f5-6319-4141-963a-3f825a5e52fb","clientId":"","location":"data_rest/develop/controllers.SetCurrentExpirySymbol[common_internal_functions.go:257]","time":"2023-11-26T01:00:04Z","message":"Running sql query","traceId":"c3c9c07ca97c250fb3ffc68282ed74b6","spanId":"38e385d29314a402"}
    {"level":"error","extra":{"file":"example.csv"},"requestId":"c1a56rf5-1319-4141-963a-67825a5e52fb","clientId":"","error":"NoSuchBucket: The specified bucket does not exist\\n\\tstatus code: 404, request id: CJ17XTVR3WYCTF3V, host id: Wbd299NWLJBOhb2K284JOxfZb/Ycp9uFRoY5eh9/NlQGpeua01Fda5IWNKqooPERa/pmeYbliWE=","location":"data_rest/develop/controllers.Downloadfroms3.func1[symbol_master_s3.go:94]","time":"2023-11-26T01:00:05Z","message":"Unable to download file","traceId":"","spanId":""}
    {"level":"debug","extra":"","requestId":"c1af64f5-6319-4141-963a-3f825a5e52fb","clientId":"","location":"data_rest/develop/controllers.Downloadfroms3.func1[symbol_master_s3.go:96]","time":"2023-11-26T01:00:05Z","message":"Downloaded file","traceId":"c3c9c07ca97c250fb3ffc68282ed7499","spanId":"38e385d29314a4f5"}
    {"level":"error","extra":"","requestId":"c1af64f5-6319-4141-963a-3f825a5e52fb","clientId":"","error":"NoSuchBucket: The specified bucket does not exist\\n\\tstatus code: 404, request id: CJ15V6NSWCBY7535, host id: rowBpQpTw7jXZBoAvWL4sIIRaMEA5oH8zVG/E5nyRUKh9bEtL3fB4Yg6Z6IVB2nto1O8ZqggX6U=","location":"data_rest/develop/controllers.Downloadfroms3.func1[symbol_master_s3.go:94]","time":"2023-11-26T01:00:05Z","message":"Unable to download file","traceId":"","spanId":""}
    \`\`\`
    
    Now to read every line as a single entry, and appropriately populate the \`service.name\`, \`service.version\`, \`body\`, \`attributes\`, \`severity\`, \`timestamp\`, \`span_id\`, \`trace_id\` and other fields, we define a filelog receiver with following operators -
    
    \`\`\`yaml
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
          value: "EXPR(body)"
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
    \`\`\`
    
    This produces an OTLP log entry which looks something like this :
    
    \`\`\`json
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
        "traceId": "c3c9c07ca97c250fb3ffc68282ed74b6",
        "spanId": "38e385d29314a402"
      }
    }
    \`\`\`
    
    Depending on the use case, you can use various other [operators](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/filelogreceiver) to customize the data you are trying to collect and export.
    
    Thats it for today!
    `,
  },
  {
    title: "Custom Observability : Alternative to Rigid SaaS products",
    meta_title: "Custom observability",
    description:
      "Custom observability is a tailored observability solution for institutions need",
    date: "2023-12-05T05:00:00Z",
    image: "/images/blog/kid.jpg",
    categories: ["Observability"],
    author: "Anurag Pandey",
    tags: ["observability", "grafana", "opentelemetry", "clickhouse"],
    draft: false,
    markdown: `

<br>

    ### **What is observability ?**
    
    Ability to see all important and relevant aspects of infrastructure/business at one place. This allows institutions to debug problems, set early alerts, analyze performance, ensure healthy working of business and more.
    
    ### **How to setup End To End Observability**
    
    It comprises of three parts :
    
    1. Instrumenting code : Process needs to emit telemetry data (Traces, Metrics and Logs), for which code need to be modified (build with suitable SDKs). Checkout [OpenTelemetry Instrumentation](https://opentelemetry.io/docs/concepts/instrumentation/).
    2. Architecting Telemetry Backend : Starts with identifying: What Telemetry data, from where and how much will be generated. After an idea of scale choose an OLAP/Timeseries Database (e.g. ClickHouse, Influx DB) which will store the data (it will have to be sharded and replicated). Design the telemetry data flow : how many collectors to put where, how and where to process the data, where to do the load balancing. Note that format of telemetry data has been standardized and heavy lifting is done by [OTel Collectors](https://opentelemetry.io/docs/collector/).
    3. Dashboarding : Involves creating suitable dashboards for visualizing telemetry data, recommended tool is [Grafana](https://grafana.com/). We assure you it has got everything you need to make an awesome dashboard (whooping 58K stars on Github).
    
    ### **Existing Solutions**
    
    There are lot of existing solutions e.g. Datadog, Splunk, Signoz, Dynatrace. Common practice among all is charging on the usage of their products i.e logs ingested, hosts, users and monthly and more.
    
    > **Imagine if shoes were free but you had to pay for each step in them!**
    
    All the tools required to achieve an awesome in-house observability solution are Opensource : [OpenTelemetry](https://github.com/orgs/open-telemetry/repositories), [ClickHouse](https://github.com/ClickHouse/ClickHouse) and [Grafana](https://github.com/grafana/grafana) (More than **100000 Stars On Github**).
    We are there to help you with the _technical debt_ to bring it home!
    
    ### **Benefits of Custom Observability**
    
    1. **Custom Crafted for You**: Ditch the one-size-fits-all approach and collaborate with your teams to design a solution that perfectly aligns with your unique needs and workflow.
    2. **Open Source, Open Savings**: Embrace the transparency and cost-effectiveness of open-source technologies like Grafana and OpenTelemetry. No more hefty vendor lock-in or recurring fees.
    3. **One-Time Setup, Lifetime Value**: Ditch the endless SaaS subscriptions.
    4. **Improved adoption** : An in-house solution reciprocates far more to the teams, and thus all teams use it proactively.
    5. **Fine Grained Control** : You can modify the amount of instrumentation depending on what information would have helped in debugging. This leads to unparalleled observability eventually.
    
    ### **Take our hand**
    
    We specialize in helping institutions setup their own observability solutions, we have done it at scale for large institutions. Contact us!
    `,
  },
  {
    title:
      "India’s leading brokerage firm unlocks 85% cost savings using Incerto’s industry-first custom observability solution powered by OpenTelemetry",
    meta_title: "custom observability case study",
    description:
      "India’s leading brokerage firm unlocks 85% cost savings using Incerto’s industry-first custom observability solution powered by OpenTelemetry",
    date: "2023-12-17T05:00:00Z",
    image: "/images/blog/cost-reduction.jpg",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: [
      "observability",
      "grafana",
      "opentelemetry",
      "clickhouse",
      "case-study",
    ],
    draft: false,
    markdown: `
<br>

    ## **Challenge**
    
    ### **Grappling with high volumes, inadequate retention, and compliance gaps**
    
    The client, a leading brokerage firm in India, grappled with intricate observability challenges inherent in high volumes of trade. Existing solutions fell short in critical areas, from tracing capabilities to recovery times, impacting operational efficiency. With no single observability solution meeting all requirements, vendor scaling was difficult and expensive. The demand for scalability, log processing struggled during peak traffic hours, and stringent compliance standards further intensified the need for a transformative observability solution.
    
    <br>
    
    ## **Solution**
    
    ### **Custom observability powered by OSS (OpenTelemetry) built on the client’s infrastructure**
    
    - Leveraging OpenTelemetry, we systematically instrumented, generated, collected, and exported telemetry data. This meticulous approach addressed the tracing gaps, significantly reducing Mean Time to Recovery (MTTR) from hours to minutes, thus enhancing overall system reliability.
    - Introducing a robust ClickHouse cluster, we overcame the challenge of scaling and retaining telemetry data. Now, the brokerage firm can store billions of rows efficiently, ensuring quick and reliable access to historical data for SIEM compliance needs.
    - Incorporated Grafana for visualization, analysis, and alerting. This not only simplified the interpretation of telemetry data but also empowered proactive decision-making, mitigating challenges in correlating low cardinality telemetry data across various services.
    
    <br>
    
    ## **Impact**
    
    - Reduced costs: Slashed IT costs by 85% (One-time turnkey implementation, hence no recurring subscription fees).
    - High efficiency: MTTR reduction from hours to minutes.
    - Customized insights: Tailored team dashboards for C-Level, Product, and Developer verticals and status page for clients.
    - Vendor-agnostic solution: Streamlined operations with no reliance on multiple vendors.
    
    <br>
    
    ## **Say goodbye to costly subscriptions**
    
    Experience vendor-agnostic excellence at a fraction of the cost.
    
    <br>
    {{< button label="Book a Demo" link="/contact" style="solid" >}}
    `,
  },
  {
    title: "Resource Detection Processor in OpenTelemetry Collector",
    meta_title: "observability",
    description: "observability",
    date: "2023-11-18T00:00:00Z",
    image: "/images/blog/opentelemetry.png",
    categories: ["Observability"],
    author: "Shiva Pundir",
    tags: ["observability", "opentelemetry"],
    draft: false,
    markdown: `
<br>

    ### **Introduction**
    
    OpenTelemetry has become a cornerstone in the world of observability, offering a versatile set of tools to collect, process, and export telemetry data. One of the crucial components that enrich the observability experience is the Resource Detection Processor. In this blog post, we'll explore how to leverage the Resource Detection Processor in the OpenTelemetry Collector for more insightful and context-rich telemetry data.
    
    The Resource Detection Processor is a vital element within the OpenTelemetry Collector that automatically identifies and extracts information about the underlying environment in which your applications are running. This includes details about the host system, the runtime environment, and other contextual information that enhances the richness of your telemetry data.
    
    ### **Configuration**
    
    The config for \`resourcedetection\` processor looks something like this -
    
    \`\`\`yaml
    resourcedetection/env:
      detectors:
        - env
      timeout: 2s
      override: false
      \`\`\`
    
    Here we are using the \`env\` as the detector, therefore we will need to populate the attributes (key-values) in the ENV variable \`OTEL_RESOURCE_ATTRIBUTES\` of the host, e.g.
    
    \`\`\`bash
    OTEL_RESOURCE_ATTRIBUTES="os.type=linux,host.name=<host_name>,service.name=<service_name>,service.version=<service_version>,custom_attribute=<custom_value>"
    \`\`\`
    
    Find the full settings for \`resourcedetection\` processor [here](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/resourcedetectionprocessor).
    
    ### **Conclusion**
    
    The Resource Detection Processor in the OpenTelemetry Collector is a powerful tool for automatically enriching your telemetry data with contextual information about the environment in which your applications are running. By leveraging this processor, you empower your observability stack with additional insights, making it easier to pinpoint issues, understand dependencies, and optimize performance.
    
    Thats it for today. Cheers!
    `,
  },
  {
    title: "Commercial Linux Screen Casting",
    meta_title: "Linux Screen Casting for Windows 10",
    description: "Roadmap to Linux Screen Casting",
    date: "2023-11-22T05:00:00Z",
    image: "/images/blog/screnshare.jpg",
    categories: ["Linux Development"],
    author: "Anurag Pandey",
    tags: ["problem-solving", "miracast", "windows", "linux"],
    draft: false,
    markdown: `
    <br>
    
    ### **Problem Statement**
    
    The client had a custom operating system built on top of the Debian distro (called VingOS), which ran on an Intel NUC. Any Apple device was able to screen cast onto VingOS seamlessly. The client wanted to extend the same support for Windows too. As this was a commercial product, ensuring user-friendliness and seamless integration with other existing VingOS applications was crucial. Team Ving was looking for the following features:
    
    - Connection (time taken for the screen to appear on the sink after clicking the connect button in Windows) time < 4 secs.
    - Instant Disconnection.
    - Ability to stream high quality audio and video (1080p), esp on large screens.
    - Zero jitter & lag < 100ms.
    - Support Screen Extention (use VingOS as other screen rather than casting).
    - Support Multiple Screens with indeference to Aiplay or Miracast.
    - Should be able to connect to the internet using Wifi and Ethernet while screen casting.
    - Graceful disconnect in all the cases.
    
    ### **Screencasting Interface in Windows ?**
    
    Windows has out-of-box support for casting screens. It implements the [Miracast](https://www.wi-fi.org/discover-wi-fi/miracast) specification. Great! So all we needed was to have Miracast complaint sink.
    Source: The device whose screen is being casted.
    Sink: The device where the screen is casted to.
    
    There are two Linux compatible open source options (with suitable licences):
    
    - [Lazycast](https://github.com/homeworkc/lazycast) -- Written in Python and C, easier to understand and change, but specifically made for Raspbian.
    - [Miraclecast](https://github.com/albfan/miraclecast) -- Written completely in C, the more rigorous and well-written of the two.
    
    To screen cast as a Windows user, you need to follow the steps below:
    
    - Press (Win + K)
    - Select the screen with cursor or arrow keys
    - Click on "Connect" button
    
    After a successful connection, Windows shows the following options:
    
    - Duplicate (Default)
    - Extend
    - Second Screen only
    
    Windows as per Miracast Specification supports complete Wifid connection. Additionally, it also supports [MS-MICE](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-mice/9598ca72-d937-466c-95f6-70401bb10bdb) (over infrastructure). User can't really see any difference between two as the interface to connect remains the same. Miraclecast had no support for MICE, but Lazycast has. To understand what Miraclecast and Lazycast have to offer, let's explore the Linux components that are important.
    
    ### **How does screencasting work ft. Miracast Specification**
    
    Screen casting can be broken down into the following stages:
    
    - **Establishing connection** : Includes discovery of a Linux device on the Windows Miracast Interface (done through the P2P protocol), followed by connection between devices (either P2P or MS-MICE). After this phase is over, two devices have a duplex socket connection and can therefore exchange data. An [RTSP Session](https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol) is started.
    - **RTSP Session (Capability Negotiation)**: Source and Sink tell each other their capabilities, e.g., bitrate, resolution, video and audio codecs, expected latency, etc. A full list can be found in the Miracast specification. After this phase is over, either the session is terminated because of incompatibility or [RTP Streaming](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) has started on the agreed upon (7236 by default) port.
    - **RTP Session** : This implies Windows has started streaming MPEG2 packets. Many media players support capturing and displaying RTP streams over a port, e.g., VLC. Adjustments to improve the decoding latency, pixelation, and network buffering have to be made at the media player level. Gstreamer is a popular choice (either write piplines using gst-launch or write your own code to custom-build the player).
    
    Only the first stage varies based on whether we employ P2P or MS-MICE. We will delve deeper into the first stage in another post.
    
    To offer multiple screen casting sessions concurrently, we should be able to establish multiple connections without interfering with the Airplay module. The connection in which we are interested has to happen over WiFi (otherwise it would not be user-friendly). Most modern WiFi cards come with support for P2P connections, allowing devices to securely connect to each other over WiFi without the need for a router, that is, in a single hop.
    
    To find out the support from the wificard, check the output of \`iw phy\` (linux terminal). Following is one excerpt of output from my terminal:
    
    \`\`\`python
            Supported interface modes:
                     * IBSS
                     * managed
                     * AP
                     * AP/VLAN
                     * monitor
                     * P2P-client
                     * P2P-GO
                     * P2P-device
    \`\`\`
    
    The above tells us about the supported modes. Normally, when we are connected to a WiFi network, we are in \`managed\` mode. We need a P2P-client or P2P-GO for MS-MICE of WiFid. But can Wifi cards be in two modes simultaneously? Yes, at least in most cases. Following excerpt from \`iw phy\` shows which (and how many) modes are supported together.
    
    \`\`\`python
        valid interface combinations:
            * #{ managed } <= 1, #{ AP, P2P-client, P2P-GO } <= 1, #{ P2P-device } <= 1,
            total <= 3, #channels <= 2
    \`\`\`
    
    The above snippet tells us that we can be in \`managed\` mode and \`(P2P-client or P2-GO)\` and \`P2P device\` at the same time. But how is it possible? That happens using the \`Network Namespace\`.
    
    But wait, what if Airplay interferes with our work? How do we make sure it is unaffected and can work in parallel? How can we connect multiple Windows devices? And what even is P2P? We will cover all of it in our next blog.
    `,
  },
];
