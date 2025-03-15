/**
 * Types related to the Select component
 */

export interface SelectOptionType {
  value: number;
  label: string;
  sprite?: string;
}

export interface SelectProps {
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

export interface SelectedItemProps {
  option: SelectOptionType;
  onRemove: (value: number, e: React.MouseEvent) => void;
}

export interface SelectOptionProps {
  option: SelectOptionType;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

export interface SelectLabelProps {
  id: string;
  label: string;
  required: boolean;
}

export interface SelectDropdownProps {
  options: SelectOptionType[];
  selectedOptions: SelectOptionType[];
  maxSelections: number;
  isLoading: boolean;
  handleOptionClick: (option: SelectOptionType) => void;
}
