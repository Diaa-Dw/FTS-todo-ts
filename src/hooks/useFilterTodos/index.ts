import { useEffect, useState } from "react";
import { useFilterTodosProps } from "./useFilterTodos.type";

const useFilterTodos = ({
  todos,
  searchTerm,
}: useFilterTodosProps): Todo[] | [] => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const handler = setTimeout(() => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const result = todos.filter((todo) =>
        todo.todo.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredTodos(result);
    }, 300);

    return () => clearTimeout(handler);
  }, [todos, searchTerm]);

  return filteredTodos;
};

export default useFilterTodos;
