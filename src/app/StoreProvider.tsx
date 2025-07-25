"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import type { PropsWithChildren } from "react";
import { createStore } from "./store/store";
import type { AppDispatch } from "./store/store";
import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "./store/store";
import { loadProductList } from "./store/productSlice";

export default function StoreProvider({ children }: PropsWithChildren) {
  // Типизация useRef для хранилища
  const storeRef = useRef<Store<RootState, any> | null>(null);

  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  useEffect(() => {
    const dispatch = storeRef.current!.dispatch as AppDispatch;
    dispatch(loadProductList());
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
