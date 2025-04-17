import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import TodosContanier from "./components/TodosContainer";
import useToggleTheme from "./hooks/useToggleTheme";
import { getFromLocalStorage, setToLocalStorage } from "./utils/localStorage";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    getFromLocalStorage<"light" | "dark">("theme") ?? "dark"
  );

  //set theme to localStorage
  useEffect(() => {
    setToLocalStorage("theme", theme);
  }, [theme]);

  useToggleTheme(theme);

  return (
    <>
      <Header setTheme={setTheme} />
      <TodosContanier />
      <Toaster position='top-center' />
    </>
  );
}

export default App;
