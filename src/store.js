import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
