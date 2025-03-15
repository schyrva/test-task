export const SELECT_DEFAULTS = {
  PLACEHOLDER: "Select...",
  HELP_TEXT: "This is a help text.",
  SEARCH_PLACEHOLDER: "Type to search...",
  MAX_SELECTIONS: Infinity,
};

export const FORM_LABELS = {
  REQUIRED: "Required",
  OPTIONAL: "Optional",
};

export const ERROR_MESSAGES = {
  MAX_SELECTIONS: (max: number) => `You can select up to ${max} items`,
  REQUIRED_FIELD: "This field is required",
};
