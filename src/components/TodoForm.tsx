import FormInput from "./FormInput";

import "../styles/todoForm.style.css";
import { IoMdAdd } from "react-icons/io";
const TodoForm = () => {
  return (
    <form aria-label='Add new task' className='todo-list__form'>
      <FormInput
        type={"text"}
        placeholder={"Add new task..."}
        icon={<IoMdAdd />}
      />
    </form>
  );
};

export default TodoForm;
