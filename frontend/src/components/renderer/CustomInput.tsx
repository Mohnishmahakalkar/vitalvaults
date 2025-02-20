import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import default styles
import DynamicText from "../DynamicText";

interface CustomInputProps {
  label: string;
  name: string;
  control: any;
  type?: string; // Can be "text", "email", "password", "textarea", or "phone"
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
}) => {
  return (
    <div>
      <DynamicText text={label} className="font-semibold"/>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={type === "phone" ? "" : ""}
        render={({ field, fieldState: { error } }) => (
          <div>
            {type === "textarea" ? (
              <textarea
                {...field}
                placeholder={placeholder}
                className={`w-full border px-3 py-2 rounded-md mt-2 focus:outline-none resize-none ${
                  error
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
                rows={4}
              />
            ) : type === "phone" ? (
              <div
                className={`w-full flex items-center border rounded-md mt-2 ${
                  error ? "border-red-500" : "border-gray-300"
                } focus-within:border-blue-500`}
              >
                <PhoneInput
                  country={"in"} // Default country (India)
                  value={field.value}
                  onChange={(phone) => field.onChange(phone)}
                  inputClass="!w-full !px-3 !py-2 !border-none !focus:outline-none !pl-12 !rounded-md"
                  containerClass="w-full"
                  buttonClass="!border-none !bg-gray-200 !rounded-l-md !transition-all !duration-200 !hover:bg-gray-300 !hover:shadow-md"
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "58px", // Dynamic padding for flag width
                    borderRadius: "8px",
                    height: "40px", // Match other inputs
                  }}
                />
              </div>
            ) : (
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                className={`w-full border px-3 py-2 rounded-md  mt-2 focus:outline-none ${
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
};

export default CustomInput;
