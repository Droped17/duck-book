import { Dispatch, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import { LoginService } from "../core/login.service";

const apiCallMiddleware =
  (store: RootState) =>
  (next: Dispatch<RootState>) =>
  (action: { type: string; payload: { save: boolean } }) => {
    console.log("action", { store, action });
    LoginService.getInstance().anyAPICall();
    next(action);
  };

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCallMiddleware),
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  devTools: true,
});

const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper<RootState>(makeStore);
