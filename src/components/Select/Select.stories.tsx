import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select, { SelectOption } from "./Select";
import lunaEdgeLogo from "../../assets/logos/LunaEdgeLogo.svg";

// Logo for Storybook documentation
const StoryLogo = () => (
  <div className="bg-indigo-700 p-4 rounded">
    <img src={lunaEdgeLogo} alt="Luna Edge Logo" className="h-8" />
  </div>
);

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <StoryLogo />
          </div>

          <h1 className="text-3xl font-bold mb-4">Select Component</h1>

          <p className="mb-6">
            The Select component allows users to select one or multiple options
            from a dropdown list. It supports filtering/searching, custom
            rendering, and various states like loading and error.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Single or multiple selections</li>
            <li>Search/filter functionality</li>
            <li>Custom option rendering with images</li>
            <li>Maximum selection limit</li>
            <li>Loading state</li>
            <li>Error state with validation</li>
            <li>Accessible design</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <pre className="bg-gray-100 p-4 rounded mb-6 overflow-auto">
            {`
import Select from './components/Select/Select';

const MyComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  return (
    <Select
      id="example"
      label="Select Options"
      options={options}
      value={selectedOptions}
      onChange={setSelectedOptions}
      placeholder="Select options..."
      maxSelections={4}
      isSearchable={true}
    />
  );
};
            `}
          </pre>

          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Default</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-medium">id</td>
                  <td className="px-4 py-2 text-sm font-mono">string</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">
                    Unique identifier for the select
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">label</td>
                  <td className="px-4 py-2 text-sm font-mono">string</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">
                    Label displayed above the select
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">options</td>
                  <td className="px-4 py-2 text-sm font-mono">
                    SelectOption[]
                  </td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">
                    Array of options to display in the dropdown
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">value</td>
                  <td className="px-4 py-2 text-sm font-mono">
                    SelectOption[]
                  </td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">Currently selected options</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">onChange</td>
                  <td className="px-4 py-2 text-sm font-mono">
                    (value: SelectOption[]) =&gt; void
                  </td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">Callback when selection changes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">placeholder</td>
                  <td className="px-4 py-2 text-sm font-mono">string</td>
                  <td className="px-4 py-2">"Select..."</td>
                  <td className="px-4 py-2">
                    Placeholder text when no options are selected
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">maxSelections</td>
                  <td className="px-4 py-2 text-sm font-mono">number</td>
                  <td className="px-4 py-2">Infinity</td>
                  <td className="px-4 py-2">
                    Maximum number of selections allowed
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">isSearchable</td>
                  <td className="px-4 py-2 text-sm font-mono">boolean</td>
                  <td className="px-4 py-2">true</td>
                  <td className="px-4 py-2">
                    Whether the dropdown can be filtered by typing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">isLoading</td>
                  <td className="px-4 py-2 text-sm font-mono">boolean</td>
                  <td className="px-4 py-2">false</td>
                  <td className="px-4 py-2">Whether to show loading state</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">error</td>
                  <td className="px-4 py-2 text-sm font-mono">string</td>
                  <td className="px-4 py-2">undefined</td>
                  <td className="px-4 py-2">Error message to display</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">required</td>
                  <td className="px-4 py-2 text-sm font-mono">boolean</td>
                  <td className="px-4 py-2">false</td>
                  <td className="px-4 py-2">Whether the field is required</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">helpText</td>
                  <td className="px-4 py-2 text-sm font-mono">string</td>
                  <td className="px-4 py-2">"This is a help text."</td>
                  <td className="px-4 py-2">
                    Help text displayed below the select
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    error: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

// Mock data for stories
const mockOptions: SelectOption[] = [
  {
    value: 1,
    label: "Bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    value: 2,
    label: "Ivysaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    value: 3,
    label: "Venusaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    value: 4,
    label: "Charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    value: 5,
    label: "Charmeleon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    value: 6,
    label: "Charizard",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    value: 7,
    label: "Squirtle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    value: 8,
    label: "Wartortle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    value: 9,
    label: "Blastoise",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    value: 25,
    label: "Pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
];

// Controlled component wrapper for state management in stories
const SelectWithState = ({
  options = mockOptions,
  maxSelections = Infinity,
  isSearchable = true,
  isLoading = false,
  error,
  required = false,
  ...args
}: {
  options?: SelectOption[];
  maxSelections?: number;
  isSearchable?: boolean;
  isLoading?: boolean;
  error?: string;
  required?: boolean;
  [key: string]: any;
}) => {
  const [value, setValue] = useState<SelectOption[]>([]);
  return (
    <div className="w-96 p-4">
      <Select
        id="story-select"
        label="Pokemon"
        options={options}
        value={value}
        onChange={setValue}
        maxSelections={maxSelections}
        isSearchable={isSearchable}
        isLoading={isLoading}
        error={error}
        required={required}
        {...args}
      />
    </div>
  );
};

// Stories
export const Default: Story = {
  render: () => <SelectWithState />,
};

export const WithMaxSelections: Story = {
  render: () => (
    <SelectWithState
      maxSelections={4}
      helpText="You can select up to 4 Pokemon"
    />
  ),
};

export const Loading: Story = {
  render: () => <SelectWithState isLoading={true} />,
};

export const WithError: Story = {
  render: () => (
    <SelectWithState
      error="Please select at least one Pokemon"
      required={true}
    />
  ),
};

export const NonSearchable: Story = {
  render: () => (
    <SelectWithState
      isSearchable={false}
      helpText="This select doesn't support searching"
    />
  ),
};
