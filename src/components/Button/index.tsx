import "./button.style.css";
import { ButtonProps } from "./button.type";

const Button = ({
  variant,
  size,
  className = "",
  onClick,
  children,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant}  ${size} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
