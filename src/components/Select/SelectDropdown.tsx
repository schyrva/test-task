import React from "react";
import SelectOption, { SelectOptionType } from "./SelectOption";

interface SelectDropdownProps {
  options: SelectOptionType[];
  selectedOptions: SelectOptionType[];
  maxSelections: number;
  isLoading: boolean;
  handleOptionClick: (option: SelectOptionType) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  selectedOptions,
  maxSelections,
  isLoading,
  handleOptionClick,
}) => {
  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading options...</div>
    );
  }

  if (options.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No options found</div>
    );
  }

  return (
    <>
      {options.map((option) => {
        const isSelected = selectedOptions.some(
          (item) => item.value === option.value
        );
        const isDisabled =
          selectedOptions.length >= maxSelections && !isSelected;

        return (
          <SelectOption
            key={option.value}
            option={option}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onClick={() => {
              if (!isDisabled || isSelected) {
                handleOptionClick(option);
              }
            }}
          />
        );
      })}
    </>
  );
};

export default SelectDropdown;
