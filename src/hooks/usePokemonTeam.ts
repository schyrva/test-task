import { useCallback } from "react";
import { Pokemon } from "../types/pokemon";
import { usePokemon } from "./usePokemon";
import { SelectOptionType } from "../types";

export const usePokemonTeam = (selectedPokemon: SelectOptionType[]) => {
  const { getPokemonById } = usePokemon();

  const getPokemonTeam = useCallback((): Pokemon[] => {
    return selectedPokemon
      .map((option) => getPokemonById(option.value))
      .filter((pokemon): pokemon is Pokemon => pokemon !== undefined);
  }, [selectedPokemon, getPokemonById]);

  return {
    getPokemonTeam,
  };
};
