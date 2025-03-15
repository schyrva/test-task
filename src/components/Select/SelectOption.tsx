import React, { memo } from "react";
import classNames from "classnames";
import { SelectOptionProps } from "../../types";

const SelectOption: React.FC<SelectOptionProps> = ({
  option,
  isSelected,
  isDisabled,
  onClick,
}) => {
  const optionClasses = classNames("p-2 flex items-center", {
    "bg-indigo-50 text-indigo-700": isSelected,
    "hover:bg-gray-100": !isDisabled,
    "opacity-50 cursor-not-allowed": isDisabled && !isSelected,
    "cursor-pointer": !isDisabled || isSelected,
  });

  return (
    <div
      className={optionClasses}
      onClick={onClick}
      role="option"
      aria-selected={isSelected}
      tabIndex={isDisabled ? -1 : 0}
    >
      {option.sprite && (
        <img
          src={option.sprite}
          alt={option.label}
          className="w-6 h-6 mr-2"
          loading="lazy"
        />
      )}
      <span className="truncate flex-1">{option.label}</span>

      {isSelected && (
        <span className="ml-auto">
          <svg
            className="h-5 w-5 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default memo(SelectOption);
