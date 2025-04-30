import { IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "../";
import "./header.style.css";
import { HeaderProps } from "./header.type";

const Header = ({ theme, onThemeChange }: HeaderProps) => {
  return (
    <header className='header'>
      <h1 className='header__title'>TODO</h1>
      <Button variant='outline' size='md' type='button' onClick={onThemeChange}>
        {theme === "dark" ? <IoSunny /> : <IoMoon />}
      </Button>
    </header>
  );
};

export default Header;
