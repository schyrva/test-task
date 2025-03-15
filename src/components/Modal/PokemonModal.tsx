import React from "react";
import { Pokemon } from "../../types/pokemon";
import { Card } from "../ui";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import TrainerInfo from "./TrainerInfo";
import PokemonTeam from "./PokemonTeam";
import { useScrollLock } from "./useScrollLock";

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
  // Use our custom hook to handle scroll locking
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-50">
      <Card
        className="relative max-w-xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl"
        noPadding
      >
        {/* Header section */}
        <ModalHeader title="Your Pokemon Team" onClose={onClose} />

        {/* Content section - this is the scrollable area */}
        <div className="p-6 bg-white">
          {/* Trainer info */}
          <TrainerInfo firstName={userName} lastName={lastName} />

          {/* Pokemon team */}
          <PokemonTeam pokemonTeam={pokemonTeam} />
        </div>

        {/* Footer section */}
        <ModalFooter onClose={onClose} />
      </Card>
    </div>
  );
};

export default PokemonModal;
