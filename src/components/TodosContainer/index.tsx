import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import tableAttributes from "../../data/tableAttibutes.data";
import useFilterTodos from "../../hooks/useFilterTodos";
import Button from "../Button";
import FormInput from "../FormInput";
import Modal from "../Modal";
import TableBody from "../TableBody";
import TodoTableContainer from "../TableContainer";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import TodoForm from "../TodoForm";
import "./todosContanier.style.css";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../utils/localStorage";

const TodosContanier = () => {
  const [todos, setTodos] = useState<Todo[]>(
    getFromLocalStorage<Todo[]>("todos") ?? []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredTodos = useFilterTodos({ todos, searchTerm });

  useEffect(() => {
    setToLocalStorage("todos", todos);
  }, [todos]);

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

      <TodoTableContainer>
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
