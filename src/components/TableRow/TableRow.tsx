import { FaCheck, FaHourglassHalf, FaTrash } from "react-icons/fa";
import { Button } from "../";
import "./tableRow.style.css";
import { TableRowProps } from "./tableRow.type";
import { useState } from "react";
import toast from "react-hot-toast";

const TableRow = ({
  todo,
  setTodos,
  setIsModalOpen,
  setSelectedId,
}: TableRowProps) => {
  const [taskValue, setTaskValue] = useState(todo.todo);
  const [isTaskClicked, setIsTaskClicked] = useState<boolean>(false);
  const { id, todo: task } = todo;
  const status = todo.completed ? "completed" : "pending";

  //handler function to toggle todo status
  const toggleTodoStatus = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.success("Your task status changed successfully🎉");
  };

  const onDeleteButtonClick = () => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  //handler function to update todo when input loses focus
  const handleBlur = () => {
    if (taskValue !== task) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, todo: taskValue } : todo
        )
      );
    }
    setIsTaskClicked(false);
    toast.success("Your task updated successfully");
  };

  return (
    <tr className={`todo-list__table-row ${status}`}>
      <td className='todo-list__table-cell'>{todo.id}</td>
      <td
        className='todo-list__table-cell todo-list__table-cell--task'
        onClick={() => setIsTaskClicked(true)}
      >
        {isTaskClicked ? (
          <input
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            className='todo-list__table-cell-input'
            onBlur={handleBlur}
          />
        ) : (
          task
        )}
      </td>
      <td className='todo-list__table-cell'>
        <span className='todo-list__task-status'>{status}</span>
      </td>
      <td className='todo-list__table-cell'>
        <div className='todo-list__actions-container'>
          <Button
            type='button'
            size='sm'
            variant='outline'
            onClick={toggleTodoStatus}
          >
            {status === "completed" ? <FaHourglassHalf /> : <FaCheck />}
          </Button>
          <Button
            type='button'
            size='sm'
            variant='outline'
            onClick={onDeleteButtonClick}
          >
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
