import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { Pokemon, PokemonListResponse, PokemonOption } from "../types/pokemon";
import { API_URLS, DEFAULT_POKEMON_LIMIT } from "../constants/api";
import { capitalizeFirstLetter } from "../utils/string";

// Interface for hook return value
interface UsePokemonResult {
  isLoading: boolean;
  error: string | null;
  pokemonOptions: PokemonOption[];
  getPokemonById: (id: number) => Pokemon | undefined;
}

/**
 * Extract Pokemon ID from URL
 */
const extractPokemonId = (url: string): number => {
  const idString = url.split("/").filter(Boolean).pop() || "0";
  return parseInt(idString);
};

/**
 * Convert Pokemon data to PokemonOption format
 */
const convertToOption = (pokemon: Pokemon): PokemonOption => ({
  value: pokemon.id,
  label: capitalizeFirstLetter(pokemon.name),
  sprite: pokemon.sprites.front_default,
});

/**
 * Hook for fetching and managing Pokemon data
 */
export const usePokemon = (limit = DEFAULT_POKEMON_LIMIT): UsePokemonResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pokemonOptions, setPokemonOptions] = useState<PokemonOption[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<Record<number, Pokemon>>(
    {}
  );

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get list of Pokemon
        const pokemonListUrl = `${API_URLS.POKEMON}${API_URLS.POKEMON_ENDPOINT}?limit=${limit}`;
        const response = await axios.get<PokemonListResponse>(pokemonListUrl);

        // Create detail request for each Pokemon
        const pokemonDetailsPromises = response.data.results.map((pokemon) => {
          const pokemonId = extractPokemonId(pokemon.url);
          const detailUrl = `${API_URLS.POKEMON}${API_URLS.POKEMON_ENDPOINT}/${pokemonId}`;

          return axios.get<Pokemon>(detailUrl);
        });

        // Fetch all Pokemon details in parallel
        const detailsResponses = await Promise.all(pokemonDetailsPromises);

        // Process responses into options and details
        const options: PokemonOption[] = [];
        const details: Record<number, Pokemon> = {};

        detailsResponses.forEach((response) => {
          const pokemon = response.data;

          // Create option for the select dropdown
          options.push(convertToOption(pokemon));

          // Store full Pokemon data
          details[pokemon.id] = pokemon;
        });

        setPokemonOptions(options);
        setPokemonDetails(details);
      } catch (err) {
        setError("Failed to fetch Pokemon data. Please try again later.");
        console.error("Error fetching Pokemon:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonList();
  }, [limit]);

  // Get a Pokemon by its ID
  const getPokemonById = useCallback(
    (id: number): Pokemon | undefined => pokemonDetails[id],
    [pokemonDetails]
  );

  // Memoize hook result to prevent unnecessary rerenders
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
