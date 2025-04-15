import tableAttributes from "../../data/tableAttibutes.data";
import TableHead from "../TableHead";
import "./tableContainer.style.css";

const TodoTableContainer = () => {
  return (
    <section className='todo-list__table-container'>
      <table className='todo-list__table'>
        <TableHead tableAttributes={tableAttributes} />
      </table>
    </section>
  );
};

export default TodoTableContainer;
