import React, { memo } from 'react';

import { Button } from '../ui';

interface ModalFooterProps {
  onClose: () => void;
  onSave?: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose, onSave }) => {
  const handleSave = onSave || onClose;

  return (
    <footer className="flex justify-end p-4 gap-3 border-t border-gray-200 bg-gray-50">
      <Button variant="outline" onClick={onClose} size="base">
        Cancel
      </Button>

      <Button variant="primary" onClick={handleSave} size="base">
        Save
      </Button>
    </footer>
  );
};

export default memo(ModalFooter);
