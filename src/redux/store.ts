import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        movieStoreSlice: movieSlice.reducer,
        genreStoreSlice: genreSlice.reducer,
    }
});