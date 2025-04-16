import { IoSearch } from "react-icons/io5";
import FormInput from "../FormInput";
import TodoForm from "../TodoForm";
import "./todosContanier.style.css";
import TodoTableContainer from "../TableContainer";
import useFetchTodos from "../../hooks/useFetchTodos";

const TodosContanier = () => {
  const { todos, isLoading, setTodos } = useFetchTodos();

  return (
    <main className='todo-list'>
      <section className='todo-list__form-container'>
        <TodoForm />
        <FormInput
          type='search'
          icon={<IoSearch />}
          placeholder='Search tasks...'
        />
      </section>

      <TodoTableContainer todos={todos} isLoading={isLoading} />
    </main>
  );
};

export default TodosContanier;
