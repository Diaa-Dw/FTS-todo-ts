import "./button.style.css";
import { ButtonProps } from "./button.type";

const Button = ({ variant, size, className = "", children }: ButtonProps) => {
  return (
    <button className={`btn ${variant}  ${size} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
