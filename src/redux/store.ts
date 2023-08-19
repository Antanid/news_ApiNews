import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import TopHeadlinesSlice from "./TopHeadlines/TopHeadlinesSlice";

export const store = configureStore({
    reducer : {
        TopHeadlinesSlice
    }
})

export type RootState = ReturnType <typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); 