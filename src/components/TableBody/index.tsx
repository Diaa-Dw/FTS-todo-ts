import TableRow from "../TableRow";
import "./tableBody.style.css";
import { TableBodyProps } from "./tableBody.type";

const TableBody = ({ todos }: TableBodyProps) => {
  return (
    <tbody className='todo-list__table-body'>
      {todos.map((todo) => (
        <TableRow key={todo.id} todo={todo} />
      ))}
    </tbody>
  );
};

export default TableBody;
