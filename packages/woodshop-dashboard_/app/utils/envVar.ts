export const envVar = (envVar: string): string => {
  // @ts-ignore
  return env?.[envVar] || envVar || `MISSING ENV VAR "${envVar}"`;
};

export const envVarFromContext = (
  envVar: string,
  context: {
    env?: Record<string, string>;
  } & Record<string, string>
): string => {
  // @ts-ignore
  return (
    context.env?.[envVar] || context?.[envVar] || `MISSING ENV VAR "${envVar}"`
  );
};
