import React from "react";

interface CustomButtonProps {
  label: string;
  type?: "danger" | "success" | "normal";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isSubmit?: boolean;
  customStyles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  type = "normal",
  onClick,
  className = "",
  isSubmit = false,
  customStyles = "",
}) => {
  const baseStyles = "px-4 py-2 rounded-md text-white font-semibold text-lg";
  const stylesMap = {
    danger: "bg-red-500 hover:bg-red-600 transition duration-200",
    success: "bg-green-500 hover:bg-green-600 transition duration-200",
    normal: "bg-button hover:bg-primary transition duration-200",
  };

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      className={`${baseStyles} ${stylesMap[type]} ${customStyles} ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
