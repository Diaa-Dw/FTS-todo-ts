import { FaCheck, FaHourglassHalf, FaTrash } from "react-icons/fa";
import "./tableRow.style.css";

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
      <td className='todo-list__table-cell'>${todo.id}</td>
      <td className='todo-list__table-cell todo-list__table-cell--task'>
        {task}
      </td>
      <td className='todo-list__table-cell' data-label='Status'>
        <span className='todo-list__task-status'>${status}</span>
      </td>
      <td className='todo-list__table-cell' data-label='Actions'>
        <div className='todo-list__actions-container'>
          <button className='todo-list__button todo-list__button--status'>
            {status === "completed" ? <FaHourglassHalf /> : <FaCheck />}
          </button>
          <button className='todo-list__button todo-list__button--delete'>
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
