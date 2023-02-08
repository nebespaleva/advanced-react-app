import { FC } from 'react';
import { classNames } from "shared/lib";
import styles from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type AppLinkType = {
    className?: string;
    theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkType> = (props) => {
    const { className, to, theme = AppLinkTheme.PRIMARY, children } = props;
    return (
        <Link to={to} className={classNames(styles.appLink, {}, [className, styles[theme]])}>
            { children }
        </Link>
    );
};