import React, {FC, useMemo, useState} from 'react';
import { ThemeContext, Theme, LOCALSTORAGE_THEM_KEY } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCALSTORAGE_THEM_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultValue = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};