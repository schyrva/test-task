import React, { memo } from 'react';

import { FORM_LABELS } from '../../constants';
import { SelectLabelProps } from '../../types';

const SelectLabel: React.FC<SelectLabelProps> = ({ id, label, required }) => {
  return (
    <label htmlFor={id} className="flex justify-between text-sm font-medium text-gray-700 mb-2">
      <span className="flex items-center gap-1">
        {label} {required && <span className="text-red-500">*</span>}
      </span>

      <span className="text-gray-500 text-sm">
        {required ? FORM_LABELS.REQUIRED : FORM_LABELS.OPTIONAL}
      </span>
    </label>
  );
};

export default memo(SelectLabel);
