import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Pokemon } from "../../types/pokemon";

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
      <div className="relative bg-white rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-auto">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Your Pokemon Team</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Trainer Information
            </h3>
            <p className="mt-2 text-gray-600">
              Name:{" "}
              <span className="font-medium">
                {userName} {lastName}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Your Pokemon
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {pokemonTeam.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className="border rounded-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={
                      pokemon.sprites.other["official-artwork"].front_default ||
                      pokemon.sprites.front_default
                    }
                    alt={pokemon.name}
                    className="w-32 h-32 object-contain"
                  />
                  <h4 className="text-lg font-medium mt-2 capitalize">
                    {pokemon.name}
                  </h4>
                  <div className="flex gap-2 mt-2">
                    {pokemon.types.map((type) => (
                      <span
                        key={type.type.name}
                        className="px-2 py-1 rounded text-xs font-medium bg-indigo-100 text-indigo-800 capitalize"
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="flex justify-end p-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
