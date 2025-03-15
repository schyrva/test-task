import React from "react";

interface SelectLabelProps {
  id: string;
  label: string;
  required: boolean;
}

const SelectLabel: React.FC<SelectLabelProps> = ({ id, label, required }) => {
  return (
    <label htmlFor={id} className="flex justify-between mb-2">
      <span className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <span className="text-gray-500 text-sm">
        {required ? "Required" : "Optional"}
      </span>
    </label>
  );
};

export default SelectLabel;
