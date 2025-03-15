import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Heading } from "../ui";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      <Heading
        level="h2"
        className="text-xl"
        variant="primary"
        weight="semibold"
      >
        {title}
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
  );
};

export default ModalHeader;
