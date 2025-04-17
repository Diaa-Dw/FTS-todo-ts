type SetTodos = React.Dispatch<React.SetStateAction<Todo[]>>;

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}
