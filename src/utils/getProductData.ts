import { productData } from "@/data/product";

enum ProductName {
  cloudMetrics = "host_metrics",
  traceAndLogs = "trace_and_logs",
  anomalyDetection = "anomaly_detection",
}
export const getProductData = (productName: string | null) => {
  switch (productName) {
    case ProductName.cloudMetrics:
      return productData.CloudMetrics;
    case ProductName.anomalyDetection:
      return productData.anomalyDetection;
    case ProductName.traceAndLogs:
      return productData.tracesAndLogs;
    default:
      return productData.CloudMetrics;
  }
};
