import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userDetail from "../feature/userDetailsSlice";

export const store = configureStore({
    reducer: {
        app: userDetail,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
