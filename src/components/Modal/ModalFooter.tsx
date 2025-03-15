import React from "react";
import { Button } from "../ui";

interface ModalFooterProps {
  onClose: () => void;
  onSave?: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose, onSave }) => {
  return (
    <div className="flex justify-end p-4 gap-3">
      <Button className="mr-2" variant="outline" onClick={onClose} size="base">
        Cancel
      </Button>

      <Button variant="primary" onClick={onSave || onClose} size="base">
        Save
      </Button>
    </div>
  );
};

export default ModalFooter;
