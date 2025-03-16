import axios from 'axios';
import { useState, useEffect, useMemo, useCallback } from 'react';

import { API_URLS, DEFAULT_POKEMON_LIMIT } from '../constants/api';
import { Pokemon, PokemonListResponse, PokemonOption } from '../types/pokemon';
import { capitalizeFirstLetter } from '../utils/string';

interface UsePokemonResult {
  isLoading: boolean;
  error: string | null;
  pokemonOptions: PokemonOption[];
  getPokemonById: (id: number) => Pokemon | undefined;
}

const extractPokemonId = (url: string): number => {
  const idString = url.split('/').filter(Boolean).pop() || '0';
  return parseInt(idString);
};

const convertToOption = (pokemon: Pokemon): PokemonOption => ({
  value: pokemon.id,
  label: capitalizeFirstLetter(pokemon.name),
  sprite: pokemon.sprites.front_default,
});

export const usePokemon = (limit = DEFAULT_POKEMON_LIMIT): UsePokemonResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pokemonOptions, setPokemonOptions] = useState<PokemonOption[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<Record<number, Pokemon>>({});

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const pokemonListUrl = `${API_URLS.POKEMON}${API_URLS.POKEMON_ENDPOINT}?limit=${limit}`;
        const response = await axios.get<PokemonListResponse>(pokemonListUrl);

        const pokemonDetailsPromises = response.data.results.map((pokemon) => {
          const pokemonId = extractPokemonId(pokemon.url);
          const detailUrl = `${API_URLS.POKEMON}${API_URLS.POKEMON_ENDPOINT}/${pokemonId}`;

          return axios.get<Pokemon>(detailUrl);
        });

        const detailsResponses = await Promise.all(pokemonDetailsPromises);

        const options: PokemonOption[] = [];
        const details: Record<number, Pokemon> = {};

        detailsResponses.forEach((response) => {
          const pokemon = response.data;

          options.push(convertToOption(pokemon));

          details[pokemon.id] = pokemon;
        });

        setPokemonOptions(options);
        setPokemonDetails(details);
      } catch (err) {
        setError('Failed to fetch Pokemon data. Please try again later.');
        console.error('Error fetching Pokemon:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonList();
  }, [limit]);

  const getPokemonById = useCallback(
    (id: number): Pokemon | undefined => pokemonDetails[id],
    [pokemonDetails]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      pokemonOptions,
      getPokemonById,
    }),
    [isLoading, error, pokemonOptions, getPokemonById]
  );
};
