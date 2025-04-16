import { FaCheck, FaHourglassHalf, FaTrash } from "react-icons/fa";
import Button from "../Button";
import "./tableRow.style.css";
import { TableRowProps } from "./tableRow.type";

const TableRow = ({ todo, setTodos }: TableRowProps) => {
  const { id, todo: task } = todo;
  const status = todo.completed ? "completed" : "pending";

  //handler function to toggle todo status
  const toggleTodoStatus = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //handler function to delete todo
  const handleDeleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <tr className={`todo-list__table-row ${status}`}>
      <td className='todo-list__table-cell'>{todo.id}</td>
      <td className='todo-list__table-cell todo-list__table-cell--task'>
        {task}
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
            onClick={handleDeleteTodo}
          >
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
