import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Status } from "../types";
import { fetchTopHeadlines } from "./asyncTopHeadlines";

const initialState = {
    topNews: [],
    status: Status.LOADING,
}

const TopHeadlinesSlice = createSlice({
    name: 'TopHeadlinesSlice',
    initialState,
    reducers: {
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

export const setTopHeadlines = (state: RootState) => state.TopHeadlinesSlice.topNews;
export const setStatusLoading = (state: RootState) => state.TopHeadlinesSlice.status;

export default TopHeadlinesSlice.reducer;