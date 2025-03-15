import React from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { Text } from "../ui";
import { SelectOptionType } from "./SelectOption";
import SelectedItem from "./SelectedItem";
import SelectDropdown from "./SelectDropdown";
import SelectLabel from "./SelectLabel";
import { useSelect } from "../../hooks/useSelect";
import { getContainerClasses } from "../../utils/selectUtils";

export type { SelectOptionType };

interface SelectProps {
  id: string;
  label: string;
  options: SelectOptionType[];
  value: SelectOptionType[];
  onChange: (value: SelectOptionType[]) => void;
  placeholder?: string;
  maxSelections?: number;
  isSearchable?: boolean;
  isLoading?: boolean;
  error?: string;
  required?: boolean;
  helpText?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
  maxSelections = Infinity,
  isSearchable = true,
  isLoading = false,
  error,
  required = false,
  helpText = "This is a help text.",
}) => {
  const {
    isOpen,
    dropdownRef,
    toggleDropdown,
    handleOptionClick,
    removeSelected,
    searchValue,
    handleSearch,
    filteredOptions,
  } = useSelect({
    options,
    value,
    onChange,
    maxSelections,
    isSearchable,
  });

  const containerClasses = getContainerClasses(isOpen, error);

  return (
    <div className="relative mb-8 w-full" ref={dropdownRef}>
      <SelectLabel id={id} label={label} required={required} />

      <div
        className={`${containerClasses} px-3 py-2 mt-2`}
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap items-center gap-1">
          {value.length === 0 ? (
            <div className="text-gray-400">{placeholder}</div>
          ) : (
            <>
              {value.map((option) => (
                <SelectedItem
                  key={option.value}
                  option={option}
                  onRemove={removeSelected}
                />
              ))}
            </>
          )}

          {isOpen && isSearchable && (
            <input
              type="text"
              className="flex-grow outline-none border-none px-2 py-1 bg-transparent"
              value={searchValue}
              onChange={handleSearch}
              onClick={(e) => e.stopPropagation()}
              placeholder="Type to search..."
              autoFocus
            />
          )}

          <div className="ml-auto pl-2">
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="absolute inset-y-0 right-8 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full left-0 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto max-w-full">
          <SelectDropdown
            options={filteredOptions}
            selectedOptions={value}
            maxSelections={maxSelections}
            isLoading={isLoading}
            handleOptionClick={handleOptionClick}
          />
        </div>
      )}

      {error ? (
        <Text color="error" variant="small" className="mt-2">
          {error}
        </Text>
      ) : (
        <Text color="muted" variant="small" className="mt-2">
          {helpText}
        </Text>
      )}

      {maxSelections !== Infinity && (
        <Text variant="tiny" color="muted" className="mt-1">
          Selected {value.length} of {maxSelections}
        </Text>
      )}
    </div>
  );
};

export default React.memo(Select);
