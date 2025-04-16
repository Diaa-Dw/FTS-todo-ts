export interface TableRowProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | []>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
}
