import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { Heading } from '../ui';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      <Heading level="h2" className="text-xl" variant="primary" weight="semibold">
        {title}
      </Heading>

      <button
        type="button"
        onClick={onClose}
        className="rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Close modal"
      >
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </header>
  );
};

export default ModalHeader;
