import React from "react";

interface CustomButtonProps {
  label: string;
  type: "danger" | "success" | "normal";
  onClick?: () => void;
  className?: string;
  isSubmit?: boolean;
  customStyles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  type,
  onClick,
  className,
  isSubmit = false,
  customStyles = "",
}) => {
  const baseStyles = "px-4 py-2 rounded-md text-white font-semibold";
  const typeStyles =
    type === "danger"
      ? "bg-red-500 hover:bg-red-600 transition duration-200"
      : type === "success"
      ? "bg-green-500 hover:bg-green-600 transition duration-200"
      : "bg-button hover:bg-primary transition duration-200";

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      className={`${baseStyles} ${typeStyles} ${customStyles} ${
        className || ""
      }`}
    >
      <h1 className="text-lg font-semibold text-white text-center">{label}</h1>
    </button>
  );
};

export default CustomButton;
