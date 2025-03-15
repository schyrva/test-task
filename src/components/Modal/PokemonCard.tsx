import React from "react";
import { Pokemon } from "../../types/pokemon";
import { Badge, Card, Heading } from "../ui";
import { getPokemonTypeColor } from "../../constants/pokemonTypes";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card key={pokemon.id} className="p-4 flex flex-col items-center" bordered>
      <img
        src={
          pokemon.sprites.other["official-artwork"].front_default ||
          pokemon.sprites.front_default
        }
        alt={pokemon.name}
        className="w-32 h-32 object-contain"
      />
      <Heading
        level="h4"
        className="mt-2 capitalize"
        variant="primary"
        weight="medium"
      >
        {pokemon.name}
      </Heading>
      <div className="flex gap-2 mt-2">
        {pokemon.types.map((type) => (
          <Badge
            key={type.type.name}
            variant={getPokemonTypeColor(type.type.name)}
            size="sm"
            className="capitalize"
          >
            {type.type.name}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default PokemonCard;
