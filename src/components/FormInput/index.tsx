import "./formInput.style.css";
import { FormInputProps } from "./formInput.type";

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
