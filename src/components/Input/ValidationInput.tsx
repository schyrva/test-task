import React from "react";
import {
  UseFormRegister,
  FieldErrors,
  Path,
  FieldError,
  RegisterOptions,
} from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

interface ValidationInputProps<TFormValues extends Record<string, any>> {
  id: Path<TFormValues>;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  validationRules?: RegisterOptions<TFormValues, Path<TFormValues>>;
}

function ValidationInput<TFormValues extends Record<string, any>>({
  id,
  label,
  placeholder = "",
  type = "text",
  register,
  errors,
  validationRules = {},
}: ValidationInputProps<TFormValues>): React.ReactElement {
  const hasError = !!errors[id];
  const errorMessage = errors[id]?.message as string | undefined;

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validationRules)}
          className={`block w-full px-4 py-2 border ${
            hasError ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            hasError ? "pr-10" : ""
          }`}
        />
        {hasError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {hasError && errorMessage && (
        <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
          {errorMessage}
        </p>
      )}
      <p className="mt-1 text-sm text-gray-500">
        This information is required.
      </p>
    </div>
  );
}

export default ValidationInput;
