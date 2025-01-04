"use client";

import { AppStore, makeStore } from "@/lib/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";

/**
 * StoreProvider is a component that wraps a React tree with a Redux store.
 * It initializes the store once and then memoizes the result for subsequent renders.
 * @param children The React tree that should be wrapped with the store.
 * @returns A React component that wraps the given children with a Redux store.
 */
const StoreProvider = ({ children }: Children) => {
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) storeRef.current = makeStore();

    return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
