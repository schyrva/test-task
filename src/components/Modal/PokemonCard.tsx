import React, { memo } from 'react';

import { getPokemonTypeColor } from '../../constants/pokemonTypes';
import { Pokemon } from '../../types/pokemon';
import { Badge, Card, Heading } from '../ui';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const spriteUrl =
    pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <Card className="p-4 flex flex-col items-center" bordered elevation="sm">
      <img
        src={spriteUrl}
        alt={`${pokemon.name} sprite`}
        className="w-32 h-32 object-contain"
        loading="lazy"
      />

      <Heading level="h4" className="mt-2 capitalize" variant="primary" weight="medium">
        {pokemon.name}
      </Heading>

      <div className="flex gap-2 mt-2">
        {pokemon.types.map((type) => {
          const typeName = type.type.name;
          return (
            <Badge
              key={typeName}
              variant={getPokemonTypeColor(typeName)}
              size="sm"
              className="capitalize"
            >
              {typeName}
            </Badge>
          );
        })}
      </div>
    </Card>
  );
};

export default memo(PokemonCard);
