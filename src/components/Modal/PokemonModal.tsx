import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Pokemon } from "../../types/pokemon";
import { Badge, Button, Card, Heading, Text } from "../ui";
import classNames from "classnames";
import { capitalizeFirstLetter } from "../../utils/string";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <Card className="relative max-w-xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <Heading level="h2" className="text-xl">
            Your Pokemon Team
          </Heading>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <Heading level="h3" className="text-lg mb-2">
              Trainer Information
            </Heading>
            <Text variant="lead" className="mt-2">
              Name:{" "}
              <span className="font-medium">
                {userName} {lastName}
              </span>
            </Text>
          </div>

          <div>
            <Heading level="h3" className="text-lg mb-4">
              Your Pokemon
            </Heading>
            <div className="grid grid-cols-2 gap-4">
              {pokemonTeam.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  className="p-4 flex flex-col items-center border"
                >
                  <img
                    src={
                      pokemon.sprites.other["official-artwork"].front_default ||
                      pokemon.sprites.front_default
                    }
                    alt={pokemon.name}
                    className="w-32 h-32 object-contain"
                  />
                  <Heading level="h4" className="mt-2 capitalize">
                    {pokemon.name}
                  </Heading>
                  <div className="flex gap-2 mt-2">
                    {pokemon.types.map((type) => (
                      <Badge
                        key={type.type.name}
                        variant="primary"
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

        <div className="flex justify-end p-4 gap-3 border-t">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onClose}>
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PokemonModal;
