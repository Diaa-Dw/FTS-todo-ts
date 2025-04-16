import { IoSearch } from "react-icons/io5";
import FormInput from "../FormInput";
import TodoForm from "../TodoForm";
import "./todosContanier.style.css";
import TodoTableContainer from "../TableContainer";
import useFetchTodos from "../../hooks/useFetchTodos";
import { useState } from "react";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import tableAttributes from "../../data/tableAttibutes.data";
import TableRow from "../TableRow";

const TodosContanier = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { todos, isLoading, setTodos } = useFetchTodos();

  return (
    <main className='todo-list'>
      <section className='todo-list__form-container'>
        <TodoForm setTodos={setTodos} />
        <FormInput
          type='search'
          icon={<IoSearch />}
          placeholder='Search tasks...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <TodoTableContainer todos={todos} isLoading={isLoading}>
        <TableHead tableAttributes={tableAttributes} />
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </TableBody>
      </TodoTableContainer>
    </main>
  );
};

export default TodosContanier;
