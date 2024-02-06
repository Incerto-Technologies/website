### **What is observability ?**

Generally speaking, observability is the extent to which you can understand the internal state or condition of a complex system based only on knowledge of its external outputs. But in IT and cloud computing observability also refers to software tools and practices for aggregating, correlating and analyzing a steady stream of performance data from a distributed application along with the hardware and network it runs on, in order to more effectively monitor, troubleshoot and debug the application and the network to meet customer experience expectations, service level agreements (SLAs) and other business requirements. The data associated with this is called "telemetry data".

### **Telemetry Data Types**

{{< tabs >}}
{{< tab "Metrics" >}}
Metrics are aggregated measurements that indicate how your service is performing. Common examples include the rate at which your service produces errors, the number of total requests your service sees within a given timeframe, and the time it takes your service to respond to a request. Each of these metric measurements are aggregated over some period of time, and the aggregated measurement is reported in your observability platform.
{{< /tab >}}

{{< tab "Logs" >}}
Logs are the oldest and most basic of telemetry data types. They are arbitrary, timestamped text records, useful for debugging or understanding something specific about the system at a given time. For instance, you might log a message with some variable values from somewhere in your code that’s running slowly.
{{< /tab >}}

{{< tab "Traces" >}}
Traces are the most modern telemetry data type, but also the most advanced of the bunch. A trace is a collection of hierarchically-related spans. Spans represent activities within applications. Each span contains timestamps for when it started and when it stopped. It contains attributes that describe features of the operation it represents, and it can even contain events that occur during the course of the operation. Traces are also effective at capturing details across network boundaries, which is important for monitoring modern computing systems.{{< /tab >}}
{{< /tabs >}}

### **Use Cases**

#### **\#1 Indian Brokerage Firm**

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
