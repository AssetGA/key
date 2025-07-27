import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import productService from "../service/product.service";

// Тип продукта

export interface Product {
  _id: string;
  name: string;
  mark: string;
  country: string;
  imageUrl: string;
  type: string;
  quantity?: number;
  price?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Тип состояния
interface ProductState {
  entity: Product[];
  isLoading: boolean;
  error: string | null;
  dataLoaded: boolean;
}

const initialState: ProductState = {
  entity: [],
  isLoading: false,
  error: null,
  dataLoaded: false,
};

// Слайс
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRequested(state) {
      state.isLoading = true;
    },
    productReceived(state, action: PayloadAction<Product[]>) {
      state.entity = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    productRequestFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.entity.push(action.payload);
    },
  },
});

const { reducer: productReducer, actions } = productSlice;

export default productReducer;

// Экспорт действий
export const {
  productRequested,
  productReceived,
  productRequestFailed,
  addProduct,
} = actions;

// Helper function for type-safe error handling
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "An unknown error occurred";
}

// Thunk для загрузки списка
export const loadProductList = () => async (dispatch: AppDispatch) => {
  dispatch(productRequested());
  try {
    const { content } = await productService.get();
    dispatch(productReceived(content));
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    dispatch(productRequestFailed(errorMessage));
  }
};

// Селекторы
export const getProducts = (state: RootState): Product[] =>
  state.product.entity;

export const getProductLoadingStatus = (state: RootState): boolean =>
  state.product.isLoading;

export const getProductType =
  (type: string) =>
  (state: RootState): Product[] | [] =>
    state.product?.entity.filter((product) => product.type === type) || null;

export const getProductById =
  (id: string) =>
  (state: RootState): Product | null =>
    state.product.entity.find((product) => product._id === id) || null;
