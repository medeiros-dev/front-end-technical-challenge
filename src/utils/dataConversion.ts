export const makeModelList = (
  response: ModelsResponseItem[]
): ModelListItem[] => {
  const modelList: ModelListItem[] = response.map((model) => {
    return {
      id: model.job_id,
      name: model.model_name,
      type: model.model_type,
    };
  });

  return modelList;
};

export const makeChartData = (
  featureList: FeatureList,
  analysisItemList: AnalysisItem[]
): ChartDataItem[] => {
  return featureList.map((feature) => {
    const chartDataItem: ChartDataItem = { name: feature };
    analysisItemList.forEach((item) => {
      if (item.value[feature] !== undefined) {
        chartDataItem[item.name] = Number(item.value[feature] * 100).toFixed(2);
      }
    });
    return chartDataItem;
  });
};
