import React from "react";
import { Controller } from "react-hook-form";
import DynamicText from "../DynamicText";

interface Option {
  label: string;
  value: string | number;
}

interface CustomCheckboxProps {
  label?: string;
  name: string;
  control: any;
  options?: Option[];
  rules?: object;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  name,
  control,
  options = [],
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={[]} // Ensure value is always an array
      render={({
        field: { value = [], onChange, onBlur, ref },
        fieldState: { error },
      }) => {
        const currentValue = Array.isArray(value) ? value : [];

        const handleCheckboxChange = (checkedValue: string | number) => {
          const newValue = currentValue.includes(checkedValue)
            ? currentValue.filter((v) => v !== checkedValue)
            : [...currentValue, checkedValue];

          onChange(newValue);
        };

        return (
          <div>
            {label && <DynamicText text={label} className="font-bold" />}
            <div className="flex flex-col gap-2 mt-2">
              {options.length > 0 ? (
                options.map((option) => {
                  return (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        ref={ref}
                        checked={currentValue.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        onBlur={onBlur}
                        className="w-4 h-4 border-gray-300 rounded transition accent-primary" // ✅ Checkbox will be primary when selected
                      />
                      <DynamicText
                        text={option.label}
                        className="font-semibold text-black"
                      />
                    </label>
                  );
                })
              ) : (
                <p className="text-gray-500">No options available</p>
              )}
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};

export default CustomCheckbox;
