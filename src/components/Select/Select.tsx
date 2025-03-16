import { ChevronDownIcon, ChevronUpIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

import { SELECT_DEFAULTS } from '../../constants';
import { useSelect } from '../../hooks/useSelect';
import { SelectProps } from '../../types';
import { getContainerClasses } from '../../utils/selectUtils';
import { Text } from '../ui';

import SelectDropdown from './SelectDropdown';
import SelectedItem from './SelectedItem';
import SelectLabel from './SelectLabel';

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = SELECT_DEFAULTS.PLACEHOLDER,
  maxSelections = SELECT_DEFAULTS.MAX_SELECTIONS,
  isSearchable = true,
  isLoading = false,
  error,
  required = false,
  helpText = SELECT_DEFAULTS.HELP_TEXT,
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

  const [dropdownStyles, setDropdownStyles] = useState({});

  // Оновлюємо позицію дропдауна при відкритті
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const dropdownHeight = Math.min(300, filteredOptions.length * 40 + 10); // Приблизна висота дропдауна

      // Перевіряємо, чи вистачає місця знизу
      const spaceBelow = windowHeight - rect.bottom;
      const shouldFlip = spaceBelow < dropdownHeight && rect.top > dropdownHeight;

      setDropdownStyles({
        position: 'absolute',
        width: `${rect.width}px`,
        maxHeight: '300px',
        overflowY: 'auto',
        top: shouldFlip ? 'auto' : '100%',
        bottom: shouldFlip ? '100%' : 'auto',
        left: 0,
        zIndex: 50,
        marginTop: shouldFlip ? 0 : '4px',
        marginBottom: shouldFlip ? '4px' : 0,
      });
    }
  }, [isOpen, filteredOptions.length, dropdownRef]);

  const containerClasses = getContainerClasses(isOpen, error);

  return (
    <div className="relative mb-8 w-full" ref={dropdownRef}>
      <SelectLabel id={id} label={label} required={required} />

      <div className={`${containerClasses} px-3 py-2 mt-2`} onClick={toggleDropdown}>
        <div className="flex flex-wrap items-center gap-1">
          {value.length === 0 ? (
            <div className="text-gray-400">{placeholder}</div>
          ) : (
            <>
              {value.map((option) => (
                <SelectedItem key={option.value} option={option} onRemove={removeSelected} />
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
              placeholder={SELECT_DEFAULTS.SEARCH_PLACEHOLDER}
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
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      )}

      {isOpen && (
        <div
          className="bg-white border border-gray-300 rounded-lg shadow-lg"
          style={dropdownStyles}
        >
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
