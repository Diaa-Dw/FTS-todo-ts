const getTodosFromLocalStorage = (): Todo[] => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

export default getTodosFromLocalStorage;
