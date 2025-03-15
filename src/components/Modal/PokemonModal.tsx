import React, { memo, useEffect } from "react";
import { Pokemon } from "../../types/pokemon";
import { Card } from "../ui";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import TrainerInfo from "./TrainerInfo";
import PokemonTeam from "./PokemonTeam";

const MODAL_TITLE = "Your Pokemon Team";

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
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-30 backdrop-blur-sm">
      <Card
        className="relative max-w-xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl"
        noPadding
        elevation="xl"
      >
        <ModalHeader title={MODAL_TITLE} onClose={onClose} />

        <div className="p-6 bg-white">
          <TrainerInfo firstName={userName} lastName={lastName} />
          <PokemonTeam pokemonTeam={pokemonTeam} />
        </div>

        <ModalFooter onClose={onClose} />
      </Card>
    </div>
  );
};

export default memo(PokemonModal);
