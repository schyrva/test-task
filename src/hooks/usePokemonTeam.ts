import { useCallback } from "react";
import { Pokemon } from "../types/pokemon";
import { SelectOptionType } from "../components/Select/Select";
import { usePokemon } from "./usePokemon";

/**
 * Custom hook to manage a Pokemon team from selected options
 * @param selectedPokemon Array of selected Pokemon options
 * @returns Functions to work with the Pokemon team
 */
export const usePokemonTeam = (selectedPokemon: SelectOptionType[]) => {
  const { getPokemonById } = usePokemon();

  /**
   * Get the full Pokemon team objects from the selected options
   * @returns Array of Pokemon objects
   */
  const getPokemonTeam = useCallback((): Pokemon[] => {
    return selectedPokemon
      .map((option) => getPokemonById(option.value))
      .filter((pokemon): pokemon is Pokemon => pokemon !== undefined);
  }, [selectedPokemon, getPokemonById]);

  return {
    getPokemonTeam,
  };
};
