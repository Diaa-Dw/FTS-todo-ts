import { useEffect } from "react";

const useApplyTheme = (theme: string) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
};

export default useApplyTheme;
