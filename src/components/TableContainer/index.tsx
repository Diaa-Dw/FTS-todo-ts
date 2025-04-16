import Spinner from "../Spinner";
import "./tableContainer.style.css";
import { TableContainerProps } from "./tableContainer.type";

const TodoTableContainer = ({ isLoading, children }: TableContainerProps) => {
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className='todo-list__table-container'>
      <table className='todo-list__table'>{children}</table>
    </section>
  );
};

export default TodoTableContainer;
