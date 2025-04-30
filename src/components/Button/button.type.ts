import { ReactNode } from "react";

export interface ButtonProps {
  variant: "outline" | "primary" | "danger";
  size: "lg" | "md" | "sm";
  className?: string;
  children: ReactNode;
  type: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
