import React, {FC} from 'react';
import { classNames} from "shared/lib";
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme, ThemeSwitcher } from "shared/ui";

type NavbarType = {
    className?: string;
}

export const Navbar: FC<NavbarType> = ({ className }) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink to='/' theme={AppLinkTheme.PRIMARY}>Main</AppLink>
                <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>About</AppLink>
            </div>
        </div>
    );
};