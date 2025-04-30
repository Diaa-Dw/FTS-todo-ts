import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import useApplyTheme from "./hooks/useApplyTheme";
import { getFromLocalStorage, setToLocalStorage } from "./utils/localStorage";
import { TodosContanier } from "./components";

function App() {
  const [theme, setTheme] = useState(
    () => getFromLocalStorage<Theme>("theme", "dark") ?? "dark"
  );

  useEffect(() => {
    setToLocalStorage("theme", theme);
  }, [theme]);

  useApplyTheme(theme);

  const onThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header onThemeChange={onThemeChange} theme={theme} />
      <TodosContanier />
      <Toaster position='top-center' />
    </>
  );
}

export default App;
