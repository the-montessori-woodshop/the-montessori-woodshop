export const formDataToJson = <T extends Record<string, unknown>>(
  formData: FormData
): T => {
  return Object.entries(formData.entries()).reduce(
    (accum, [key, value]) => ({
      ...accum,
      [key]: value,
    }),
    {}
  ) as T;
};
