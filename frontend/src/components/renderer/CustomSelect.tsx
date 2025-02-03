import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export interface Option {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  label: string;
  name: string;
  control: any;
  options: Option[];
  rules?: object;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  control,
  options,
  rules,
}) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={null}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Select
            {...field}
            options={options}
            placeholder="Select Role"
            isSearchable
            className="mt-1"
            value={field.value || null}
            onChange={(selected) => field.onChange(selected)}
            styles={{
                control: (base, state) => ({
                  ...base,
                  borderColor: error
                    ? "red" // ✅ Red border when error exists
                    : state.isFocused
                    ? "#3b82f6" // Blue border when focused without error
                    : "#d1d5db", // Default gray border
  
                  boxShadow: "none", // ✅ No box shadow in any state
                  "&:hover": {
                    borderColor: error ? "red" : "#3b82f6", // Red on hover if error
                  },
                }),
              }}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{` ${error.message}`}</p>
          )}
        </div>
      )}
    />
  </div>
);
