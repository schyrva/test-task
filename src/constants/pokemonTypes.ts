import { BadgeVariant } from "../components/ui/Badge/Badge";

// Map of Pokemon types to badge color variants
export const POKEMON_TYPE_COLORS: Record<string, BadgeVariant> = {
  normal: "secondary", // gray
  fire: "danger", // red
  water: "info", // blue
  electric: "warning", // yellow
  grass: "success", // green
  ice: "info", // light blue
  fighting: "danger", // red
  poison: "primary", // purple
  ground: "warning", // brownish
  flying: "light", // light blue
  psychic: "primary", // purple
  bug: "success", // green
  rock: "secondary", // gray
  ghost: "dark", // dark
  dragon: "primary", // purple
  dark: "dark", // dark
  steel: "secondary", // gray
  fairy: "primary", // pink/purple

  // Fallback for any new or unknown types
  default: "primary",
};

/**
 * Gets the appropriate badge variant for a Pokemon type
 * @param type The Pokemon type
 * @returns The badge variant to use
 */
export function getPokemonTypeColor(type: string): BadgeVariant {
  return POKEMON_TYPE_COLORS[type.toLowerCase()] || POKEMON_TYPE_COLORS.default;
}
