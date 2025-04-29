import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import useToggleTheme from "./hooks/useToggleTheme";
import { getFromLocalStorage, setToLocalStorage } from "./utils/localStorage";
import { TodosContanier } from "./components";

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
      <Header setTheme={setTheme} theme={theme} />
      <TodosContanier />
      <Toaster position='top-center' />
    </>
  );
}

export default App;
