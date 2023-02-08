import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib";
import { AppRouter } from "app/providers/AppRouter";
import { Navbar } from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const { theme } = useTheme();


    return (
        <Suspense fallback=''>
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="page-content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};

export default App;