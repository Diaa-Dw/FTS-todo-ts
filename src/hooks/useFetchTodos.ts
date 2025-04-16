import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import getTodosFromLocalStorage from "../utils/getTodosLocalStorage";

interface UseFetchTodosReturn {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isLoading: boolean;
}

const useFetchTodos = (): UseFetchTodosReturn => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/todos", {
        params: {
          limit: 10,
        },
      });
      setTodos(res.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error("Failed to fetch todos. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const localTodos = getTodosFromLocalStorage();
    if (localTodos.length > 0) {
      setTodos(localTodos);
    } else {
      fetchTodos();
    }
  }, []);

  return { todos, setTodos, isLoading };
};

export default useFetchTodos;
