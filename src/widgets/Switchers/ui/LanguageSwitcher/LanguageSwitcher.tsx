import React, {FC} from 'react';
import {classNames} from "shared/lib";
import styles from './LanguageSwitcher.module.scss';
import {Button, ButtonTheme} from "shared/ui";
import {useTranslation} from "react-i18next";

type LanguageSwitcherType = {
    className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherType> = ({ className }) => {
    const { t, i18n } = useTranslation();

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(styles.languageSwitcher, {}, [className])} onClick={() => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }}>{t('язык')}
        </Button>
    );
};