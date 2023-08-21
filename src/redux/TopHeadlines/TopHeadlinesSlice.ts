import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Status } from "../types";
import { fetchTopHeadlines } from "./asyncTopHeadlines";

const initialState = {
    topNews: [],
    status: Status.LOADING,
    burgerMenu: false,
}

const TopHeadlinesSlice = createSlice({
    name: 'TopHeadlinesSlice',
    initialState,
    reducers: {
        addBurgerStatus (state, action){
            state.burgerMenu = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopHeadlines.pending, (state) => {
            state.status = Status.LOADING;
            state.topNews = []
        });
        builder.addCase(fetchTopHeadlines.fulfilled, (state, action: any) => {
            state.status = Status.SUCCESS;
            state.topNews = action.payload
        });
        builder.addCase(fetchTopHeadlines.rejected, (state, action: any) => {
            state.status = Status.ERROR;
            state.topNews = []
        });
    }
})

export const {addBurgerStatus} = TopHeadlinesSlice.actions;

export const setTopHeadlines = (state: RootState) => state.TopHeadlinesSlice.topNews;
export const setStatusLoading = (state: RootState) => state.TopHeadlinesSlice.status;
export const setBurgerStatus = (state: RootState) => state.TopHeadlinesSlice.burgerMenu;

export default TopHeadlinesSlice.reducer;