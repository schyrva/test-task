import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Pokemon } from "../../types/pokemon";
import { Badge, Button, Card, Heading, Text } from "../ui";
import classNames from "classnames";
import { capitalizeFirstLetter } from "../../utils/string";
import { getPokemonTypeColor } from "../../constants/pokemonTypes";

interface PokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemonTeam: Pokemon[];
  userName: string;
  lastName: string;
}

const PokemonModal: React.FC<PokemonModalProps> = ({
  isOpen,
  onClose,
  pokemonTeam,
  userName,
  lastName,
}) => {
  // Add body scroll lock when modal opens
  useEffect(() => {
    if (isOpen) {
      // Save the current overflow style
      const originalOverflow = document.body.style.overflow;
      // Lock scroll on body
      document.body.style.overflow = "hidden";

      // Cleanup function to restore original overflow when component unmounts
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white ">
      <Card
        className="relative max-w-xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl"
        noPadding
      >
        {/* Header section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <Heading
            level="h2"
            className="text-xl"
            variant="primary"
            weight="semibold"
          >
            Your Pokemon Team
          </Heading>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-1"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Content section - this is the scrollable area */}
        <div className="p-6 bg-white">
          {/* Trainer info */}
          <div className="mb-6">
            <Heading
              level="h3"
              className="text-lg mb-2"
              variant="secondary"
              weight="medium"
            >
              Trainer Information
            </Heading>
            <Text variant="lead" className="mt-2" color="default">
              Name:{" "}
              <span className="font-medium">
                {userName} {lastName}
              </span>
            </Text>
          </div>

          {/* Pokemon team */}
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
                <Card
                  key={pokemon.id}
                  className="p-4 flex flex-col items-center"
                  bordered
                >
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
              ))}
            </div>
          </div>
        </div>

        {/* Footer section with actions - make this sticky as well */}
        <div className="flex justify-end p-4 gap-3 border-t border-gray-200 bg-gray-50">
          <Button variant="outline" onClick={onClose} size="base">
            Cancel
          </Button>
          <Button variant="primary" onClick={onClose} size="base">
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PokemonModal;
