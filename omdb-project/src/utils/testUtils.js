import { configureStore } from "@reduxjs/toolkit";
import reducers from "../stores/reducers";

export const storeFactory = state => {
  const store = configureStore({
    reducer: reducers,
    preloadedState: state
  });

  return store;
};
