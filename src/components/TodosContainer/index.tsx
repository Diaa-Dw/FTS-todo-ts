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
import Modal from "../Modal";
import Button from "../Button";

const TodosContanier = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { todos, isLoading, setTodos } = useFetchTodos();

  const handleDeleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== selectedId));
    setIsModalOpen(false);
  };

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

      <TodoTableContainer isLoading={isLoading}>
        <TableHead tableAttributes={tableAttributes} />
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              setIsModalOpen={setIsModalOpen}
              setSelectedId={setSelectedId}
            />
          ))}
        </TableBody>
      </TodoTableContainer>

      <Modal
        title='Delete Todo'
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      >
        <p>Are you sure you want to delete this task?</p>
        <div className='modal__action-buttons'>
          <Button
            variant='outline'
            size='lg'
            type='button'
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant='danger'
            size='lg'
            type='button'
            onClick={handleDeleteTodo}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default TodosContanier;
