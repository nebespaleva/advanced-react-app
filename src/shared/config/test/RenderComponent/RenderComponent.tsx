import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from "react-router-dom";
import i18n from 'shared/config/i18n/i18n'
import {StoreProvider, StoreSchema} from "app/providers/StoreProvider";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";

type RenderComponentProps = {
    route?: string;
    initialStore?: DeepPartial<StoreSchema>,
    asyncReducers?: ReducersMapObject<StoreSchema>,
}

export const RenderComponent = (component: ReactNode, options: RenderComponentProps = {}): void => {
    const { route = "/", initialStore, asyncReducers } = options;

    render(
        <StoreProvider initialStore={initialStore as StoreSchema} asyncReducers={asyncReducers}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
