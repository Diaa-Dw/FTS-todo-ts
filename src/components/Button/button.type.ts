export interface ButtonProps {
  variant: "outline" | "primary" | "danger";
  size: "lg" | "md" | "sm";
  className?: string;
  children: Text;
  type: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
