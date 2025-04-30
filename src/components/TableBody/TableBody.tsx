import "./tableBody.style.css";
import { TableBodyProps } from "./tableBody.type";

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody className='todo-list__table-body'>{children}</tbody>;
};

export default TableBody;
