import { IoMoon, IoSunny } from "react-icons/io5";
import Button from "../Button";
import "./header.style.css";
import { HeaderProps } from "./header.type";

const Header = ({ theme, setTheme }: HeaderProps) => {
  const handleToggleThem = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className='header'>
      <h1 className='header__title'>TODO</h1>
      <Button
        variant='outline'
        size='md'
        type='button'
        onClick={handleToggleThem}
      >
        {theme === "dark" ? <IoSunny /> : <IoMoon />}
      </Button>
    </header>
  );
};

export default Header;
