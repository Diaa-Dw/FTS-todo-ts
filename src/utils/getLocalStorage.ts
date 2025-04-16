const getTodosFromLocalStorage = (key: string): Todo[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export default getTodosFromLocalStorage;
