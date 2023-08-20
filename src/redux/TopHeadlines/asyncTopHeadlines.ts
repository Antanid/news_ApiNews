import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type fetchTopHeadType = {
    language: string;
    location: string;
}

export const fetchTopHeadlines = createAsyncThunk('fetchTopHeadlines/TopHeadlinesSlice', async(params: fetchTopHeadType) => {
    const {language, location} = params;
    const fetchData = await axios.get(`https://newsapi.org/v2/top-headlines?country=${language}${location.length > 0 ? `&category=${location}` : ''}&apiKey=e1a70ee02dff411687258660e996b19e`);
    return fetchData.data.articles
})