import {createSlice} from "@reduxjs/toolkit";

const initMovieSliceState: MovieSliceType = {results: []}

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initMovieSliceState,
    reducers: {},
    extraReducers: builder => builder
});