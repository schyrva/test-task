import { RegisterOptions } from "react-hook-form";

export const NAME_VALIDATION_RULES: RegisterOptions = {
  required: "This field is required",
  minLength: {
    value: 2,
    message: "Name must be at least 2 characters long",
  },
  maxLength: {
    value: 12,
    message: "Name cannot exceed 12 characters",
  },
  pattern: {
    value: /^[a-zA-Z]+$/,
    message: "Only letters (a-z, A-Z) are allowed",
  },
};
