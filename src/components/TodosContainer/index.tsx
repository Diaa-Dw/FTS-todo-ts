import TodoForm from "../TodoForm";
import "./todosContanier.style.css";

const TodosContanier = () => {
  return (
    <main className='todo-list'>
      <section className='todo-list__form-container'>
        <TodoForm />
      </section>
    </main>
  );
};

export default TodosContanier;
