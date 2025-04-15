import { IoMdAdd } from "react-icons/io";
import FormInput from "../FormInput";
import "./todoForm.style.css";
import Button from "../Button";

const TodoForm = () => {
  return (
    <form aria-label='Add new task' className='todo-list__form'>
      <FormInput
        type={"text"}
        placeholder={"Add new task..."}
        icon={<IoMdAdd />}
      />
      <Button variant="primary" size='lg' >Add</Button>
    </form>
  );
};

export default TodoForm;
