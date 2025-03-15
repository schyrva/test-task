import React, { useState } from "react";
import ValidationInput from "../Input/ValidationInput";
import Select, { SelectOption } from "../Select/Select";
import PokemonModal from "../Modal/PokemonModal";
import { usePokemon } from "../../hooks/usePokemon";
import { useFormValidation, FormData } from "../../hooks/useFormValidation";
import { Pokemon } from "../../types/pokemon";
import { Card, Heading, Button } from "../ui";

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
    nameValidationRules,
  } = useFormValidation();

  const onSubmit = (data: FormData) => {
    if (selectedPokemon.length === 4) {
      setFormData(data);
      setIsModalOpen(true);
    }
  };

  const getPokemonTeam = (): Pokemon[] => {
    return selectedPokemon
      .map((option) => getPokemonById(option.value))
      .filter((pokemon): pokemon is Pokemon => pokemon !== undefined);
  };

  const isFormComplete = isValid && selectedPokemon.length === 4;

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <Heading level="h1" align="center" className="mb-6">
        Pokemon Team Builder
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
          <Button
            type="submit"
            disabled={!isFormComplete}
            fullWidth
            className={isFormComplete ? "" : "bg-gray-400 cursor-not-allowed"}
          >
            View Your Team
          </Button>
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
    </Card>
  );
};

export default PokemonForm;
