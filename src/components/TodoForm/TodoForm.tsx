import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { Button, FormInput } from "../";
import "./todoForm.style.css";
import { TodoFormProps } from "./todoForm.type";

const TodoForm = ({ setTodos }: TodoFormProps) => {
  const [task, setTask] = useState("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.length < 3) {
      toast.error("Your task must include at least 3 characters⛔");
      return;
    }
    const id = Number(`${new Date().getTime()}`.slice(-7));
    const taskObj = {
      id,
      todo: task,
      completed: false,
    };
    setTodos((prev) => [taskObj, ...prev]);
    setTask("");
    toast.success("Task add successfuly🎉");
  };

  return (
    <form
      aria-label='Add new task'
      className='todo-list__form'
      onSubmit={handleAddTodo}
    >
      <FormInput
        type={"text"}
        placeholder={"Add new task..."}
        icon={<IoMdAdd />}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type='submit' variant='primary' size='lg'>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
