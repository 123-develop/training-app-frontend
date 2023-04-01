import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import { mainReducer } from "./reducers/main-reducer";

const store = configureStore({
 reducer: {
  app: appReducer,
  auth: authReducer,
  main: mainReducer,
 },
});

export default store;
