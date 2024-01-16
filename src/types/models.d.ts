/* istanbul ignore file */
type ModelListItem = {
  id: string;
  name: string;
  type: "Regression" | "Classification";
};

type ModelsResponseItem = {
  model_version: number;
  ts_start: number;
  ts_end: number;
  num_categorical: number;
  job_id: string;
  model_type: "Regression" | "Classification";
  num_continuous: number;
  model_name: string;
  sk: string;
  ts_updated: number;
  pk?: string;
};
