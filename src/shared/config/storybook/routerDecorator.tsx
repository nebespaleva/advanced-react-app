import { Suspense } from "react";
import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (StoryComponent: Story) => {
    return(
        <BrowserRouter>
            <Suspense fallback="Loading...">
                <StoryComponent />
            </Suspense>
        </BrowserRouter>
    )
};