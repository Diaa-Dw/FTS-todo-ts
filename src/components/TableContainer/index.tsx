import tableAttributes from "../../data/tableAttibutes.data";
import Spinner from "../Spinner";
import TableBody from "../TableBody";
import TableHead from "../TableHead";
import "./tableContainer.style.css";
import { TableContainerProps } from "./tableContainer.type";

const TodoTableContainer = ({ todos, isLoading }: TableContainerProps) => {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className='todo-list__table-container'>
      <table className='todo-list__table'>
        <TableHead tableAttributes={tableAttributes} />
        <TableBody todos={todos} />
      </table>
    </section>
  );
};

export default TodoTableContainer;
