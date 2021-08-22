export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export const defaultRequired = (value) => {
  return value && value.trim() ? undefined : "Required";
};

export const requiredWithMessage = (message) => (value) => {
  return value && value.trim() ? undefined : message;
};

export const maxLength = (maxLength) => (value) => {
  return value && value.length > maxLength
    ? `Max length ${maxLength}`
    : undefined;
};
