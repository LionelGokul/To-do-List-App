import React from "react";

interface ButtonProps {
  className: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  type = "button",
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
