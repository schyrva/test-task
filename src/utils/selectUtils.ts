import { SelectOptionType } from '../types';

export function filterOptions(
  options: SelectOptionType[],
  searchValue: string
): SelectOptionType[] {
  const searchLower = searchValue.toLowerCase().trim();
  if (!searchLower) return options;

  return options.filter((option) => option.label.toLowerCase().includes(searchLower));
}

export function isOptionSelected(
  option: SelectOptionType,
  selectedItems: SelectOptionType[]
): boolean {
  return selectedItems.some((item) => item.value === option.value);
}

export function toggleSelection(
  option: SelectOptionType,
  selectedItems: SelectOptionType[],
  maxSelections: number
): SelectOptionType[] {
  const isSelected = isOptionSelected(option, selectedItems);
  const canAddMore = selectedItems.length < maxSelections;

  if (isSelected) {
    return selectedItems.filter((item) => item.value !== option.value);
  } else if (canAddMore) {
    return [...selectedItems, option];
  }

  return selectedItems;
}

export function getContainerClasses(isOpen: boolean, error?: string): string {
  return [
    'relative border rounded-lg shadow-sm cursor-pointer min-h-[40px]',
    error ? 'border-red-500' : 'border-gray-300',
    isOpen ? 'border-indigo-500 ring-2 ring-indigo-200' : '',
  ]
    .filter(Boolean)
    .join(' ');
}
