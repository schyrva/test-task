import React, { memo } from "react";
import SelectOption from "./SelectOption";
import { SelectOptionType } from "../../types";

interface SelectDropdownProps {
  options: SelectOptionType[];
  selectedOptions: SelectOptionType[];
  maxSelections: number;
  isLoading: boolean;
  handleOptionClick: (option: SelectOptionType) => void;
}

const LoadingState = () => (
  <div className="p-4 text-center text-gray-500">Loading options...</div>
);

const EmptyState = () => (
  <div className="p-4 text-center text-gray-500">No options found</div>
);

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  selectedOptions,
  maxSelections,
  isLoading,
  handleOptionClick,
}) => {
  if (isLoading) {
    return <LoadingState />;
  }

  if (options.length === 0) {
    return <EmptyState />;
  }

  const selectedIds = new Set(selectedOptions.map((opt) => opt.value));
  const hasReachedMax = selectedOptions.length >= maxSelections;

  return (
    <>
      {options.map((option) => {
        const isSelected = selectedIds.has(option.value);
        const isDisabled = hasReachedMax && !isSelected;

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

export default memo(SelectDropdown);
