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
