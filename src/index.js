export const createAction = (
  type,
  { validationSchema = null } = {}
) => payload => {
  if (validationSchema) {
    if (!validationSchema.isValidSync(payload)) {
      throw new Error(`Property is missing in action payload`);
    }
  }

  return { type, payload };
};
