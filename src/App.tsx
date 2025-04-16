import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import TodosContanier from "./components/TodosContainer";
import { useState } from "react";
import useToggleTheme from "./hooks/useToggleTheme";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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
