import { FaCheck, FaHourglassHalf, FaTrash } from "react-icons/fa";
import "./tableRow.style.css";
import Button from "../Button";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TableRowProps {
  todo: Todo;
}

const TableRow = ({ todo }: TableRowProps) => {
  const { todo: task } = todo;
  const status = todo.completed ? "completed" : "pending";

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
          <Button size='sm' variant='outline'>
            {status === "completed" ? <FaHourglassHalf /> : <FaCheck />}
          </Button>
          <Button size='sm' variant='outline'>
            <FaTrash />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
