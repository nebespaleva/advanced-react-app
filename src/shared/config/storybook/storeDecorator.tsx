import { Story } from "@storybook/react";
import { Provider as StoreProvider } from "react-redux";
import { createReduxStore, StoreSchema } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

export const StoreDecorator =
  (
    initialStore: StoreSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
  ) =>
  (StoryComponent: Story) => {
    const store = createReduxStore(
      initialStore,
      asyncReducers as ReducersMapObject<StoreSchema>
    );

    return (
      <StoreProvider store={store}>
        <StoryComponent />
      </StoreProvider>
    );
  };
