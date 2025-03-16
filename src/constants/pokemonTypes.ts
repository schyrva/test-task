import { BadgeVariant } from '../types';

export const POKEMON_TYPE_COLORS: Record<string, BadgeVariant> = {
  normal: 'secondary',
  fire: 'danger',
  water: 'info',
  electric: 'warning',
  grass: 'success',
  ice: 'info',
  fighting: 'danger',
  poison: 'primary',
  ground: 'warning',
  flying: 'light',
  psychic: 'primary',
  bug: 'success',
  rock: 'secondary',
  ghost: 'dark',
  dragon: 'primary',
  dark: 'dark',
  steel: 'secondary',
  fairy: 'primary',
  default: 'primary',
};

export function getPokemonTypeColor(type: string): BadgeVariant {
  return POKEMON_TYPE_COLORS[type.toLowerCase()] || POKEMON_TYPE_COLORS.default;
}
