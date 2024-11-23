type ValidationError = { key: string; message: string };

export function validateRequiredFields(
  obj: Record<string, any>,
  optionalKeys: string[] = [],
): ValidationError[] {
  const errors: ValidationError[] = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (
      !optionalKeys.includes(key) &&
      (value === null || value === undefined || value === "")
    ) {
      errors.push({ key, message: `${key} value is required` });
    }
  });

  return errors;
}
