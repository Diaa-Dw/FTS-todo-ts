import { useEffect } from "react";

const useToggleTheme = (theme: string) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
};

export default useToggleTheme;
