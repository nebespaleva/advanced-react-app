import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { appRouterConfig } from "shared/config/appRouterConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Routes>
                {Object.values(appRouterConfig).map(({path, element}) => (
                    <Route key={path} element={element} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
};