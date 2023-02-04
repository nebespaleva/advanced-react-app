import {useContext} from "react";
import {LOCALSTORAGE_THEM_KEY, Theme, ThemeContext} from "./ThemeContext";

type UseTheme = {
    theme: Theme,
    toggleTheme: () => void;
}

const useTheme = (): UseTheme => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme)
        localStorage.setItem(LOCALSTORAGE_THEM_KEY, newTheme);
    }

    return { theme, toggleTheme }
}

export default useTheme;