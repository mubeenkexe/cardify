import { configureStore } from "@reduxjs/toolkit";

/**
 * Factory function that creates a Redux store.
 * @returns {AppStore} a new Redux store
 */

export const makeStore = () => {
    return configureStore({
        reducer: {},
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
