export interface TableRowProps {
  todo: Todo;
  setTodos: SetTodos;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
}
