import "./tableContainer.style.css";
import { TableContainerProps } from "./tableContainer.type";

const TodoTableContainer = ({ children }: TableContainerProps) => {
  return (
    <section className='todo-list__table-container'>
      <table className='todo-list__table'>{children}</table>
    </section>
  );
};

export default TodoTableContainer;
