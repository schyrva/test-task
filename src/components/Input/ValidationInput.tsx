import React, { memo } from "react";
import {
  UseFormRegister,
  FieldErrors,
  Path,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { Text } from "../ui";

interface ValidationInputProps<TFormValues extends FieldValues> {
  id: Path<TFormValues>;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  validationRules?: RegisterOptions<TFormValues, Path<TFormValues>>;
  hideRequiredText?: boolean;
}

/**
 * Error icon component displayed when input has an error
 */
const ErrorIcon = memo(() => (
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <ExclamationCircleIcon
      className="h-5 w-5 text-red-500"
      aria-hidden="true"
    />
  </div>
));

/**
 * Helper text displayed below the input
 */
interface HelperTextProps {
  isRequired: boolean;
  hasError: boolean;
  errorMessage?: string;
}

const HelperText = memo<HelperTextProps>(
  ({ isRequired, hasError, errorMessage }) => {
    // Show error message if present
    if (hasError && errorMessage) {
      return (
        <div>
          <Text color="error" variant="small" className="mt-2">
            {errorMessage}
          </Text>
        </div>
      );
    }

    // Show help text if no error
    if (!hasError) {
      const helpMessage = isRequired
        ? "This information is required."
        : "This is a help text.";

      return (
        <Text color="muted" variant="small" className="mt-2">
          {helpMessage}
        </Text>
      );
    }

    return null;
  }
);

const ValidationInput = <TFormValues extends FieldValues>({
  id,
  label,
  placeholder = "",
  type = "text",
  register,
  errors,
  validationRules = {},
  hideRequiredText = false,
}: ValidationInputProps<TFormValues>): React.ReactElement => {
  const hasError = !!errors[id];
  const errorMessage = errors[id]?.message as string | undefined;
  const isRequired = !!validationRules?.required;

  const inputClasses = classNames(
    "block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px]",
    {
      "border-red-500": hasError,
      "border-gray-300": !hasError,
      "pr-10": hasError,
    }
  );

  return (
    <div className="mb-8">
      <label
        htmlFor={id}
        className="flex justify-between text-sm font-medium text-gray-700 mb-2"
      >
        <span className="flex items-center gap-1">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </span>
        
        <span className="text-gray-500 text-sm">
          {isRequired ? "Required" : "Optional"}
        </span>
      </label>

      <div className="relative mt-2">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validationRules)}
          className={inputClasses}
        />
        {hasError && <ErrorIcon />}
      </div>

      {!hideRequiredText && (
        <HelperText
          isRequired={isRequired}
          hasError={hasError}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default ValidationInput;
