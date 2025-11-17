export const onRequest = async (context) => {
  // Run normal page handling
  const response = await context.next();

  // Return response unchanged
  return response;
};
