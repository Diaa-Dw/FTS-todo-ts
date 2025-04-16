export interface ButtonProps {
  variant: string;
  size: string;
  className?: string;
  children: React.ReactNode;
  type: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
