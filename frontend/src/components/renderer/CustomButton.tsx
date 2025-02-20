import React from "react";

interface CustomButtonProps {
  label: string;
  type?: "danger" | "success" | "normal" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isSubmit?: boolean;
  disabled?: boolean;
  loading?: boolean;
  customStyles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  type = "normal",
  onClick,
  className = "",
  isSubmit = false,
  disabled = false,
  loading = false,
  customStyles = "",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold text-lg transition duration-200 flex items-center justify-center";

  const stylesMap = {
    danger: "bg-red-500 hover:bg-red-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    normal: "bg-button hover:bg-primary text-white",
    reset: "bg-gray-400 hover:bg-gray-500 text-white",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed", // Disabled styling
  };

  return (
    <button
      type={isSubmit ? "submit" : type === "reset" ? "reset" : "button"}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${
        disabled ? stylesMap.disabled : stylesMap[type]
      } ${customStyles} ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        label
      )}
    </button>
  );
};

export default CustomButton;
