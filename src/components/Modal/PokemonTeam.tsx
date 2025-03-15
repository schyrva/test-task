import React from "react";
import { Pokemon } from "../../types/pokemon";
import { Heading } from "../ui";
import PokemonCard from "./PokemonCard";

interface PokemonTeamProps {
  pokemonTeam: Pokemon[];
}

const PokemonTeam: React.FC<PokemonTeamProps> = ({ pokemonTeam }) => {
  return (
    <div>
      <Heading
        level="h3"
        className="text-lg mb-4"
        variant="secondary"
        weight="medium"
      >
        Your Pokemon
      </Heading>
      <div className="grid grid-cols-2 gap-4">
        {pokemonTeam.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonTeam;
