export interface TableRowProps {
  todo: Todo;
  onToggleComplete: (todotId: number) => void;
  onUpdateTodo: (todotId: number, newContent: string) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
}
