import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import modalSlice from "./slices/modalSlice";

export const store = () =>
  configureStore({
    reducer: {
      mod: modalSlice,
    },
  });

  export const wrapper = createWrapper(store);
