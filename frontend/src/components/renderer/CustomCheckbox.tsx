import React from "react";
import { Controller } from "react-hook-form";

interface CustomCheckboxProps {
  label: string;
  name: string;
  control: any;
  rules?: object;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  name,
  control,
  rules,
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { value, onChange, onBlur, ref },
      fieldState: { error },
    }) => (
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            ref={ref}
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            onBlur={onBlur}
            className="w-4 h-4 border-gray-300 rounded focus:ring focus:ring-blue-500"
          />
          {label}
        </label>
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    )}
  />
);

export default CustomCheckbox;
