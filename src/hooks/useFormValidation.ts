import { useForm, UseFormReturn } from "react-hook-form";
import { NAME_VALIDATION_RULES } from "../constants/validation";

export type FormData = {
  firstName: string;
  lastName: string;
  [key: string]: unknown;
};

interface UseFormValidationOptions {
  defaultValues?: Partial<FormData>;
}

export const useFormValidation = (
  options: UseFormValidationOptions = {}
): UseFormReturn<FormData> & {
  nameValidationRules: typeof NAME_VALIDATION_RULES;
} => {
  const {
    defaultValues = {
      firstName: "",
      lastName: "",
    },
  } = options;

  const form = useForm<FormData>({
    mode: "onChange",
    defaultValues,
  });

  return {
    ...form,
    nameValidationRules: NAME_VALIDATION_RULES,
  };
};
