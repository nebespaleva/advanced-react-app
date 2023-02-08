import React, {FC} from 'react';
import { classNames} from "shared/lib";
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";

type NavbarType = {
    className?: string;
}

export const Navbar: FC<NavbarType> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to='/' theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>{t('О нас')}</AppLink>
            </div>
        </div>
    );
};