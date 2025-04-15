import { IoSunny } from "react-icons/io5";
import Button from "../Button";
import "./header.style.css";

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>TODO</h1>
      <Button variant='outline' size='md'>
        <IoSunny />
      </Button>
    </header>
  );
};

export default Header;
