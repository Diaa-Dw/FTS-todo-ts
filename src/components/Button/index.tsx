import "./button.style.css";

interface ButtonProps {
  variant: string;
  size: string;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ variant, size, className = "", children }: ButtonProps) => {
  return (
    <button className={`btn ${variant}  ${size} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
