import React from "react";
import { Controller } from "react-hook-form";
import DynamicText from "../DynamicText";

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
        <DynamicText text={label} className="font-semibold" />

        <div className="flex gap-4 mt-2">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                ref={ref}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                onBlur={onBlur}
                className="w-4 h-4 border-gray-300 transition accent-primary" // ✅ Makes the selected radio primary
              />
              <DynamicText
                text={option.label}
                className="font-semibold text-black"
              />
            </label>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
      </div>
    )}
  />
);

export default CustomRadioGroup;
