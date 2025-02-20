import React from "react";
import { Controller } from "react-hook-form";

interface RadioOption {
  label: string;
  value: string;
}

interface CustomRadioGroupProps {
  label: string;
  name: string;
  control: any;
  options: RadioOption[];
  rules?: object;
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  label,
  name,
  control,
  options,
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
        <label className="block font-semibold">{label}</label>
        <div className="flex gap-4">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                ref={ref}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                onBlur={onBlur}
                className="w-4 h-4 border-gray-300 focus:ring focus:ring-blue-500"
              />
              {option.label}
            </label>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    )}
  />
);

export default CustomRadioGroup;
