import React from "react";

type ButtonSmProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const ButtonSm: React.FC<ButtonSmProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-full bg-blue-600 text-white text-base hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonSm;
