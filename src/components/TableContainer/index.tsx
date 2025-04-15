import tableAttributes from "../../data/tableAttibutes.data";
import TableHeader from "../TableHeader";
import "./tableContainer.style.css";

const TodoTableContainer = () => {
  return (
    <section className='todo-list__table-container'>
      <table className='todo-list__table'>
        <TableHeader tableAttributes={tableAttributes} />
      </table>
    </section>
  );
};

export default TodoTableContainer;
