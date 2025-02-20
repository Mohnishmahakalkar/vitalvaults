import React from "react";
import { Controller, Control } from "react-hook-form";
import Select from "react-select";
import DynamicText from "../DynamicText";

export interface Option {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  label: string;
  name: string;
  control: Control<any>;
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
  <div className="w-full">
    {/* Label */}
    <DynamicText text={label} className="font-semibold" />

    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={undefined}
      render={({ field, fieldState: { error } }) => (
        <div>
          {/* Custom Select Component */}
          <Select
            {...field}
            options={options}
            placeholder={`Select ${label}`}
            isSearchable
            value={field.value ?? null}
            onChange={(selected) => field.onChange(selected || null)}
            styles={{
              control: (base, state) => ({
                ...base,
                borderColor: error
                  ? "red"
                  : state.isFocused
                  ? "#3b82f6"
                  : "#d1d5db",
                boxShadow: state.isFocused
                  ? "0 0 0 1px rgba(59,130,246,0.5)"
                  : "none",
                "&:hover": {
                  borderColor: error ? "red" : "#3b82f6",
                },
                padding: "3px",
                borderRadius: "8px",
              }),
            }}
            className="mt-2 w-full"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  </div>
);
