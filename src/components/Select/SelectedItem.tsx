import React, { memo } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedItemProps } from "../../types";

const SelectedItem: React.FC<SelectedItemProps> = ({ option, onRemove }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(option.value, e);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-sm">
      {option.sprite && (
        <img
          src={option.sprite}
          alt={option.label}
          className="w-5 h-5 mr-1"
          loading="lazy"
        />
      )}
      <span className="truncate max-w-[100px]">{option.label}</span>

      <XMarkIcon
        className="h-4 w-4 ml-1 text-gray-500 hover:text-gray-700 cursor-pointer flex-shrink-0"
        onClick={handleRemove}
      />
    </div>
  );
};

export default memo(SelectedItem);
