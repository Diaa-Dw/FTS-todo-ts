import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import {
  Button,
  FormInput,
  Modal,
  TableBody,
  TableHead,
  TodoForm,
  TodoTableContainer,
} from "../";
import tableAttributes from "../../data/tableAttibutes.data";
import useFilterTodos from "../../hooks/useFilterTodos";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../utils/localStorage";
import TableRow from "../TableRow/TableRow";
import "./todosContanier.style.css";

const TodosContanier = () => {
  const [todos, setTodos] = useState<Todo[]>(() =>
    getFromLocalStorage<Todo[]>("todos", [])
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredTodos = useFilterTodos({ todos, searchTerm });

  useEffect(() => {
    setToLocalStorage("todos", todos);
  }, [todos]);

  const onDeleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== selectedId));
    setIsModalOpen(false);
    toast.success("Your task deleted successfully");
  };

  const onAddTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const onToggleComplete = (todoId: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.success("Your task status changed successfully🎉");
  };

  const onUpdateTodo = (todoId: number, newContent: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoId ? { ...todo, todo: newContent } : todo
      )
    );
  };

  return (
    <main className='todo-list'>
      <section className='todo-list__form-container'>
        <TodoForm onAddTodo={onAddTodo} />
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
              onToggleComplete={onToggleComplete}
              onUpdateTodo={onUpdateTodo}
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
            onClick={onDeleteTodo}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default TodosContanier;
