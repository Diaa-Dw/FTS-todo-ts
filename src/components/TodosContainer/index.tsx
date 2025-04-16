import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import tableAttributes from "../../data/tableAttibutes.data";
import useFetchTodos from "../../hooks/useFetchTodos";
import Button from "../Button";
import FormInput from "../FormInput";
import Modal from "../Modal";
import TableBody from "../TableBody";
import TodoTableContainer from "../TableContainer";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import TodoForm from "../TodoForm";
import "./todosContanier.style.css";
import useFilterTodos from "../../hooks/useFilterTodos";

const TodosContanier = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { todos, isLoading, setTodos } = useFetchTodos();
  const filteredTodos = useFilterTodos({ todos, searchTerm });

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
          {filteredTodos.map((todo) => (
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
