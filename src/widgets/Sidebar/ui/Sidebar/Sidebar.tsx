import React, {FC, useState} from 'react';
import { classNames } from "shared/lib";
import styles from './Sidebar.module.scss';
import {LanguageSwitcher, ThemeSwitcher} from "widgets/Switchers";

type SidebarType = {
    className?: string;
}

export const Sidebar: FC<SidebarType> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={toggleCollapsed}>Toggle</button>
            <div className={classNames(styles.switchers, {[styles.switchers_collapsed]: collapsed}, [])}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};