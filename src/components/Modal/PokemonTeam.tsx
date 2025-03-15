import React from "react";
import { Pokemon } from "../../types/pokemon";
import { Heading } from "../ui";
import PokemonCard from "./PokemonCard";

interface PokemonTeamProps {
  pokemonTeam: Pokemon[];
}

const PokemonTeam: React.FC<PokemonTeamProps> = ({ pokemonTeam }) => {
  const SECTION_TITLE = "Your Pokemon";

  return (
    <section className="pokemon-team">
      <Heading
        level="h3"
        className="text-lg mb-4"
        variant="secondary"
        weight="medium"
      >
        {SECTION_TITLE}
      </Heading>

      <div className="grid grid-cols-2 gap-4">
        {pokemonTeam.length === 0 ? (
          <p className="text-gray-500 col-span-2 text-center py-4">
            No Pokemon selected
          </p>
        ) : (
          pokemonTeam.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
    </section>
  );
};

export default PokemonTeam;
