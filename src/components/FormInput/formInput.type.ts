export interface FormInputProps {
  type: string;
  className?: string;
  icon: React.ReactNode;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
