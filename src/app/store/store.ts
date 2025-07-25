import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

// Корневой редьюсер
const rootReducer = combineReducers({
  product: productReducer,
});

// Тип состояния всего стора
export type RootState = ReturnType<typeof rootReducer>;

// Тип dispatch
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];

// Функция для создания стора
export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
