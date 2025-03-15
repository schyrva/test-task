import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";
import { Text } from "../ui";
import SelectOption, { SelectOptionType } from "./SelectOption";
import SelectedItem from "./SelectedItem";
import SelectDropdown from "./SelectDropdown";
import SelectLabel from "./SelectLabel";

// Rename SelectOption to SelectOptionType to avoid naming conflict with the component
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
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on search input
  useEffect(() => {
    if (searchValue.trim() === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchValue, options]);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown open/closed
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchValue("");
    }
  };

  // Handle option selection
  const handleOptionClick = (option: SelectOptionType) => {
    const isSelected = value.some((item) => item.value === option.value);

    if (isSelected) {
      onChange(value.filter((item) => item.value !== option.value));
    } else if (value.length < maxSelections) {
      onChange([...value, option]);
    }
  };

  // Handle removing a selected option
  const removeSelected = (optionValue: number, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((item) => item.value !== optionValue));
  };

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // Component classes
  const containerClasses = classNames(
    "relative border rounded-lg shadow-sm cursor-pointer min-h-[40px]",
    {
      "border-red-500": error,
      "border-gray-300": !error,
      "border-indigo-500 ring-2 ring-indigo-200": isOpen,
    }
  );

  return (
    <div className="relative mb-8 w-full" ref={dropdownRef}>
      {/* Label */}
      <SelectLabel id={id} label={label} required={required} />

      {/* Main select container */}
      <div
        className={containerClasses}
        onClick={toggleDropdown}
        style={{ padding: "8px 12px" }}
      >
        <div className="flex flex-wrap items-center gap-1">
          {/* Placeholder or selected items */}
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

          {/* Search input */}
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

          {/* Dropdown chevron */}
          <div className="ml-auto pl-2">
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {/* Error icon */}
      {error && (
        <div className="absolute inset-y-0 right-8 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Dropdown menu */}
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

      {/* Help text or error message */}
      {error ? (
        <Text color="error" variant="small" className="mt-2">
          {error}
        </Text>
      ) : (
        <Text color="muted" variant="small" className="mt-2">
          {helpText}
        </Text>
      )}

      {/* Selection counter */}
      {maxSelections !== Infinity && (
        <Text variant="tiny" color="muted" className="mt-1">
          Selected {value.length} of {maxSelections}
        </Text>
      )}
    </div>
  );
};

export default Select;
