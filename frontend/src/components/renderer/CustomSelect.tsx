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
    <label className="block text-base font-semibold mb-1">{label}</label>
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
                  ? "red"
                  : state.isFocused
                  ? "#3b82f6"
                  : "#d1d5db",

                boxShadow: "none",
                "&:hover": {
                  borderColor: error ? "red" : "#3b82f6",
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
