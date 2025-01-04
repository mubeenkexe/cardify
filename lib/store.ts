import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "@/lib/features/flashcards/flashcardSlice";

/**
 * Factory function that creates a Redux store.
 * @returns {AppStore} a new Redux store
 */

export const makeStore = () => {
    return configureStore({
        reducer: { flashcards: flashcardReducer },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
