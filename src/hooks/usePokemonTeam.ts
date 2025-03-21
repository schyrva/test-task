import { useCallback } from 'react';

import { SelectOptionType } from '../types';
import { Pokemon } from '../types/pokemon';

import { usePokemon } from './usePokemon';

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
