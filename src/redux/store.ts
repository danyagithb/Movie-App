import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice.ts";
import {genreSlice} from "./slices/genreSlice.ts";

export const store = configureStore({
    reducer: {
        movieStoreSlice: movieSlice.reducer,
        genreStoreSlice: genreSlice.reducer,
    }
});