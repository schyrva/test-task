import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ValidationInput from "../Input/ValidationInput";
import Select, { SelectOption } from "../Select/Select";
import PokemonModal from "../Modal/PokemonModal";
import { usePokemon } from "../../hooks/usePokemon";
import { Pokemon } from "../../types/pokemon";

interface FormData {
  firstName: string;
  lastName: string;
}

const PokemonForm: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<SelectOption[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });
  const { isLoading, error, pokemonOptions, getPokemonById } = usePokemon();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  // Watch form fields to update formData state
  const firstName = watch("firstName");
  const lastName = watch("lastName");

  const onSubmit = (data: FormData) => {
    if (selectedPokemon.length === 4) {
      setFormData(data);
      setIsModalOpen(true);
    }
  };

  const nameValidationRules = {
    required: "This field is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters long",
    },
    maxLength: {
      value: 12,
      message: "Name cannot exceed 12 characters",
    },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: "Only letters (a-z, A-Z) are allowed",
    },
  };

  const getPokemonTeam = (): Pokemon[] => {
    return selectedPokemon
      .map((option) => getPokemonById(option.value))
      .filter((pokemon): pokemon is Pokemon => pokemon !== undefined);
  };

  const isFormComplete = isValid && selectedPokemon.length === 4;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Pokemon Team Builder
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidationInput<FormData>
          id="firstName"
          label="First Name"
          placeholder="Enter your first name"
          register={register}
          errors={errors}
          validationRules={nameValidationRules}
        />

        <ValidationInput<FormData>
          id="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          register={register}
          errors={errors}
          validationRules={nameValidationRules}
        />

        <Select
          id="pokemonSelect"
          label="Select Your Pokemon Team"
          options={pokemonOptions}
          value={selectedPokemon}
          onChange={setSelectedPokemon}
          placeholder="Select your Pokemon team..."
          maxSelections={4}
          isLoading={isLoading}
          error={
            error ||
            (selectedPokemon.length < 4 && selectedPokemon.length > 0
              ? "You must select exactly 4 Pokemon"
              : undefined)
          }
          required
          helpText="Select 4 Pokemon to complete your team"
        />

        <div className="mt-6">
          <button
            type="submit"
            disabled={!isFormComplete}
            className={`w-full py-2 px-4 rounded-md text-white ${
              isFormComplete
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-400 cursor-not-allowed"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            View Your Team
          </button>
        </div>
      </form>

      {isModalOpen && (
        <PokemonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pokemonTeam={getPokemonTeam()}
          userName={formData.firstName}
          lastName={formData.lastName}
        />
      )}
    </div>
  );
};

export default PokemonForm;
