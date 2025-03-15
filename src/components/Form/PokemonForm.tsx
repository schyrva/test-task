import React, { useState } from "react";
import ValidationInput from "../Input/ValidationInput";
import Select from "../Select/Select";
import { SelectOptionType } from "../../types";
import PokemonModal from "../Modal/PokemonModal";
import { usePokemon } from "../../hooks/usePokemon";
import { useFormValidation, FormData } from "../../hooks/useFormValidation";
import { usePokemonTeam } from "../../hooks/usePokemonTeam";
import { Card, Heading, Button } from "../ui";

const REQUIRED_TEAM_SIZE = 4;

const PokemonForm: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<SelectOptionType[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  const { isLoading, error: apiError, pokemonOptions } = usePokemon();
  const { getPokemonTeam } = usePokemonTeam(selectedPokemon);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    nameValidationRules,
  } = useFormValidation();

  const onSubmit = (data: FormData) => {
    const isTeamComplete = selectedPokemon.length === REQUIRED_TEAM_SIZE;

    if (isTeamComplete) {
      setFormData(data);
      setIsModalOpen(true);
    }
  };

  const isFormComplete =
    isValid && selectedPokemon.length === REQUIRED_TEAM_SIZE;
  const teamSizeError =
    selectedPokemon.length > 0 && selectedPokemon.length < REQUIRED_TEAM_SIZE
      ? `You must select exactly ${REQUIRED_TEAM_SIZE} Pokemon`
      : undefined;

  const selectError = apiError || teamSizeError;

  return (
    <Card className="w-full max-w-md mx-auto p-6" elevation="md">
      <Heading
        level="h1"
        align="center"
        className="mb-6"
        variant="primary"
        weight="bold"
      >
        Pokemon Team Builder
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <ValidationInput
          id="firstName"
          label="First Name"
          placeholder="Enter your first name"
          register={register}
          errors={errors}
          validationRules={nameValidationRules}
        />

        <ValidationInput
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
          maxSelections={REQUIRED_TEAM_SIZE}
          isLoading={isLoading}
          error={selectError}
          required
          helpText={`Select ${REQUIRED_TEAM_SIZE} Pokemon to complete your team`}
        />

        <div className="mt-6">
          <Button
            type="submit"
            disabled={!isFormComplete}
            fullWidth
            variant={isFormComplete ? "primary" : "outline"}
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
