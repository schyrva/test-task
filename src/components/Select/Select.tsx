import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

export interface SelectOption {
  value: number;
  label: string;
  sprite?: string;
}

interface SelectProps {
  id: string;
  label: string;
  options: SelectOption[];
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
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
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchValue("");
    }
  };

  const handleOptionClick = (option: SelectOption) => {
    const isSelected = value.some((item) => item.value === option.value);

    if (isSelected) {
      onChange(value.filter((item) => item.value !== option.value));
    } else if (value.length < maxSelections) {
      onChange([...value, option]);
    }
  };

  const removeSelected = (optionValue: number, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((item) => item.value !== optionValue));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative mb-4" ref={dropdownRef}>
      <label htmlFor={id} className="flex justify-between">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
        <span className="text-gray-500 text-sm">Optional</span>
      </label>

      <div
        className={`relative border ${
          error ? "border-red-500" : "border-gray-300"
        } ${
          isOpen ? "border-indigo-500 ring-2 ring-indigo-200" : ""
        } rounded-md shadow-sm cursor-pointer`}
        onClick={toggleDropdown}
      >
        <div className="min-h-[40px] p-2 flex flex-wrap items-center gap-1">
          {value.length === 0 ? (
            <div className="text-gray-400 pl-2">{placeholder}</div>
          ) : (
            <>
              {value.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center bg-gray-100 rounded px-2 py-1 text-sm"
                >
                  {option.sprite && (
                    <img
                      src={option.sprite}
                      alt={option.label}
                      className="w-5 h-5 mr-1"
                    />
                  )}
                  {option.label}
                  <XMarkIcon
                    className="h-4 w-4 ml-1 text-gray-500 hover:text-gray-700"
                    onClick={(e) => removeSelected(option.value, e)}
                  />
                </div>
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

        {error && (
          <div className="absolute inset-y-0 right-8 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">
                Loading options...
              </div>
            ) : filteredOptions.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = value.some(
                  (item) => item.value === option.value
                );
                return (
                  <div
                    key={option.value}
                    className={`p-2 hover:bg-gray-100 flex items-center ${
                      isSelected ? "bg-indigo-50 text-indigo-700" : ""
                    } ${
                      value.length >= maxSelections && !isSelected
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (value.length < maxSelections || isSelected) {
                        handleOptionClick(option);
                      }
                    }}
                  >
                    {option.sprite && (
                      <img
                        src={option.sprite}
                        alt={option.label}
                        className="w-6 h-6 mr-2"
                      />
                    )}
                    {option.label}
                    {isSelected && (
                      <span className="ml-auto">
                        <svg
                          className="h-5 w-5 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
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
              })
            )}
          </div>
        )}
      </div>

      {error ? (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      ) : (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}

      {maxSelections !== Infinity && (
        <p className="text-xs text-gray-500 mt-1">
          Selected {value.length} of {maxSelections}
        </p>
      )}
    </div>
  );
};

export default Select;
