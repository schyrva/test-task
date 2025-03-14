import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { Pokemon, PokemonListResponse, PokemonOption } from "../types/pokemon";

const POKEMON_API_URL = "https://pokeapi.co/api/v2";

// Інтерфейс для повернення з хука
interface UsePokemonResult {
  isLoading: boolean;
  error: string | null;
  pokemonOptions: PokemonOption[];
  getPokemonById: (id: number) => Pokemon | undefined;
}

export const usePokemon = (limit = 150): UsePokemonResult => {
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

        const response = await axios.get<PokemonListResponse>(
          `${POKEMON_API_URL}/pokemon?limit=${limit}`
        );

        const pokemonDetailsPromises = response.data.results.map((pokemon) => {
          const pokemonId = parseInt(
            pokemon.url.split("/").filter(Boolean).pop() || "0"
          );
          return axios.get<Pokemon>(`${POKEMON_API_URL}/pokemon/${pokemonId}`);
        });

        const detailsResponses = await Promise.all(pokemonDetailsPromises);

        const options: PokemonOption[] = [];
        const details: Record<number, Pokemon> = {};

        detailsResponses.forEach((response) => {
          const pokemon = response.data;
          options.push({
            value: pokemon.id,
            label: `${
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            }`,
            sprite: pokemon.sprites.front_default,
          });
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

  // Мемоізуємо функцію getPokemonById
  const getPokemonById = useCallback(
    (id: number): Pokemon | undefined => {
      return pokemonDetails[id];
    },
    [pokemonDetails]
  );

  // Мемоізуємо результат хука для запобігання зайвим ререндерам
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
