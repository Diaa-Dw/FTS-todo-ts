export interface UseFetchTodosReturn {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | []>>;
  isLoading: boolean;
}
