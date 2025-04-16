interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface TableRowProps {
  todo: Todo;
}
