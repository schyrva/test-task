import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { SelectOptionType } from "./SelectOption";

interface SelectedItemProps {
  option: SelectOptionType;
  onRemove: (value: number, e: React.MouseEvent) => void;
}

const SelectedItem: React.FC<SelectedItemProps> = ({ option, onRemove }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-sm">
      {option.sprite && (
        <img src={option.sprite} alt={option.label} className="w-5 h-5 mr-1" />
      )}
      {option.label}
      <XMarkIcon
        className="h-4 w-4 ml-1 text-gray-500 hover:text-gray-700 cursor-pointer"
        onClick={(e) => onRemove(option.value, e)}
      />
    </div>
  );
};

export default SelectedItem;
