import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import TodosContanier from "./components/TodosContainer";

function App() {
  return (
    <>
      <Header />
      <TodosContanier />
      <Toaster position='top-center' />
    </>
  );
}

export default App;
