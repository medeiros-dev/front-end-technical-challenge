/* istanbul ignore file */
type ChartDataItem = {
  [key: string]: string | number;
};

type AnalysisItem = {
  origin: string;
  value: { [key: string]: number };
  insight_name: string;
  name: string;
};

type AnalysisFeatureResponseItem = {
  origin: string;
  value: string[];
  insight_name: string;
  name: string;
};

type FeatureList = string[];

type KeysValues = string[];
