import { Story } from "@storybook/react";
import { Provider as StoreProvider } from 'react-redux'
import { createReduxStore, StoreSchema } from "app/providers/StoreProvider";

export const StoreDecorator = (initialStore: StoreSchema) => (StoryComponent: Story) => {
    const store = createReduxStore(initialStore)

    return(
        <StoreProvider store={store}>
            <StoryComponent />
        </StoreProvider>
    )
};