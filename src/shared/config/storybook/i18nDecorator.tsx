import { Suspense, useEffect } from "react";
import {Story, StoryContext} from "@storybook/react";
import {I18nextProvider} from "react-i18next";
import i18nStories from "../../../../config/storybook/i18nStories";

export const I18nDecorator = (StoryComponent: Story, context: StoryContext) => {
    const { locale } = context.globals;

    useEffect(() => {
        i18nStories.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18nStories}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    );
};