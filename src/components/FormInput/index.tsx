import "./formInput.style.css";

interface FormInputProps {
  type: string;
  className?: string;
  icon: React.ReactNode;
  placeholder: string;
  required?: boolean;
}

const FormInput = ({
  type,
  className = "",
  icon,
  placeholder,
  required = true,
}: FormInputProps) => {
  return (
    <div className={`todo-list__input-container ${className}`}>
      <label htmlFor='add_task'>{icon}</label>
      <input
        type={type}
        name='add_task'
        id='add_task'
        placeholder={placeholder}
        className='todo-list__input--add'
        required={required}
      />
    </div>
  );
};

export default FormInput;
