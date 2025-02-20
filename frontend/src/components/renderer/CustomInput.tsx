import React from "react";
import { Controller } from "react-hook-form";

interface CustomInputProps {
  label: string;
  name: string;
  control: any;
  type?: string; // Can be "text", "email", "password", or "textarea"
  placeholder: string;
  rules?: object;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  control,
  type = "text",
  placeholder,
  rules,
}) => (
  <div>
    <label className="block text-base font-semibold mb-1">{label}</label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <div>
          {type === "textarea" ? (
            <textarea
              {...field}
              placeholder={placeholder}
              className={`w-full border px-3 py-2 rounded-md mt-1 focus:outline-none resize-none ${
                error
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              rows={4}
            />
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`w-full border px-3 py-2 rounded-md mt-1 focus:outline-none ${
                error
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
              value={field.value || ""}
            />
          )}
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  </div>
);

export default CustomInput;
