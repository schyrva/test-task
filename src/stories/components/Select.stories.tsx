import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Select from "../../components/Select/Select";
import { SelectOptionType } from "../../types";
import { Heading, Text } from "../../components/ui";

/**
 * The Select component allows users to choose one or more options from a list.
 *
 * It supports features like multi-selection, search, loading states, and error handling.
 */
const meta: Meta<typeof Select> = {
  title: "Components/Form/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## Overview

The Select component is a customizable dropdown that allows users to select one or more options from a list.

## Features
- **Multi-selection**: Select multiple options with clear visual indication
- **Search**: Filter options as you type
- **Loading states**: Visual feedback during data loading
- **Error handling**: Clear error messages
- **Accessibility**: Keyboard navigation and screen reader support
- **Customization**: Various styling options and behaviors

## Usage Guidelines
- Use when you need to select from a predefined list of options
- Especially useful when the number of options is large
- Provide clear labels and error states
- Consider using the \`maxSelections\` prop to limit selections when appropriate
        `,
      },
    },
    componentSubtitle: "A customizable dropdown select component",
  },
  argTypes: {
    id: {
      description: "Unique identifier for the select component",
      control: "text",
      table: { category: "Required" },
    },
    label: {
      description: "Label text displayed above the select",
      control: "text",
      table: { category: "Required" },
    },
    options: {
      description: "Array of options to display in the dropdown",
      control: "object",
      table: { category: "Required" },
    },
    value: {
      description: "Currently selected option(s)",
      control: "object",
      table: { category: "Required" },
    },
    onChange: {
      description: "Function called when selection changes",
      table: { category: "Required" },
    },
    placeholder: {
      description: "Text displayed when no options are selected",
      control: "text",
      table: { category: "Appearance" },
    },
    maxSelections: {
      description: "Maximum number of options that can be selected",
      control: { type: "number", min: 1 },
      table: { category: "Behavior" },
    },
    isSearchable: {
      description: "Whether the options can be filtered by typing",
      control: "boolean",
      table: { category: "Behavior" },
    },
    isLoading: {
      description: "Whether to show loading state",
      control: "boolean",
      table: { category: "State" },
    },
    error: {
      description: "Error message to display",
      control: "text",
      table: { category: "State" },
    },
    required: {
      description: "Whether the field is required",
      control: "boolean",
      table: { category: "Validation" },
    },
    helpText: {
      description: "Helper text displayed below the select",
      control: "text",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Sample data for our stories
const pokemonOptions: SelectOptionType[] = [
  {
    value: 1,
    label: "Bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    value: 4,
    label: "Charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    value: 7,
    label: "Squirtle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    value: 25,
    label: "Pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    value: 39,
    label: "Jigglypuff",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    value: 52,
    label: "Meowth",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    value: 54,
    label: "Psyduck",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    value: 143,
    label: "Snorlax",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  },
];

// Wrapper component to handle state for the stories
const SelectWithState = (args: any) => {
  const [selected, setSelected] = useState<SelectOptionType[]>(
    args.value || []
  );
  return <Select {...args} value={selected} onChange={setSelected} />;
};

/**
 * Default implementation of the Select component with basic configuration.
 */
export const Default: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    id: "default-select",
    label: "Select Pokémon",
    options: pokemonOptions,
    value: [],
    onChange: fn(),
    placeholder: "Choose your Pokémon...",
    helpText: "Select a Pokémon from the list",
  },
};

/**
 * Select with pre-selected options.
 */
export const WithPreselectedOptions: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    ...Default.args,
    id: "preselected-select",
    value: [pokemonOptions[0], pokemonOptions[3]],
    helpText: "Some Pokémon are already selected",
  },
};

/**
 * Select with limited selections (maximum of 2).
 */
export const LimitedSelections: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    ...Default.args,
    id: "limited-select",
    maxSelections: 2,
    helpText: "You can select up to 2 Pokémon",
  },
};

/**
 * Select with search disabled.
 */
export const NonSearchable: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    ...Default.args,
    id: "non-searchable-select",
    isSearchable: false,
    helpText: "This select does not support searching",
  },
};

/**
 * Select in a loading state.
 */
export const Loading: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    ...Default.args,
    id: "loading-select",
    isLoading: true,
    options: [],
    helpText: "Loading Pokémon...",
  },
};

/**
 * Select showing an error state.
 */
export const WithError: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    ...Default.args,
    id: "error-select",
    error: "Please select a valid Pokémon",
  },
};

/**
 * Required Select field with clear indication.
 */
export const Required: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    ...Default.args,
    id: "required-select",
    required: true,
    helpText: "This field is required",
  },
};

/**
 * Interactive example demonstrating all aspects of the Select component
 */
export const AllFeatures: Story = {
  render: () => {
    const [selectedPokemon, setSelectedPokemon] = useState<SelectOptionType[]>(
      []
    );
    const [error, setError] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (newValue: SelectOptionType[]) => {
      setSelectedPokemon(newValue);
      setError(
        newValue.length === 0 ? "Please select at least one Pokémon" : undefined
      );
    };

    const handleToggleLoading = () => {
      setIsLoading(!isLoading);
    };

    return (
      <div className="space-y-8">
        <div>
          <Heading level="h3" className="mb-4">
            Interactive Select Demo
          </Heading>
          <Text variant="body" className="mb-6">
            This example demonstrates various features of the Select component
            working together.
          </Text>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={handleToggleLoading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {isLoading ? "Stop Loading" : "Simulate Loading"}
          </button>

          <button
            onClick={() =>
              setError(error ? undefined : "This is a sample error")
            }
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50"
          >
            {error ? "Clear Error" : "Show Error"}
          </button>
        </div>

        <Select
          id="interactive-select"
          label="Select your Pokémon team"
          options={pokemonOptions}
          value={selectedPokemon}
          onChange={handleChange}
          placeholder="Choose your team..."
          maxSelections={4}
          isSearchable={true}
          isLoading={isLoading}
          error={error}
          required={true}
          helpText="Build your perfect Pokémon team (max 4)"
        />

        {selectedPokemon.length > 0 && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <Text variant="body" weight="medium" className="mb-2">
              Your selected team:
            </Text>
            <ul className="list-disc pl-5">
              {selectedPokemon.map((pokemon) => (
                <li key={pokemon.value}>{pokemon.label}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};
