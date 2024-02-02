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
