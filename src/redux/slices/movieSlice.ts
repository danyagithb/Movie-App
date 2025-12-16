import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../models/movie/IMovie.ts";
import {movieService} from "../../services/api.service.ts";
import type {IMovieDetails} from "../../models/movie/IMovieDetails.ts";

type MovieSliceType = {
    movies: IMovie[],
    movie: IMovieDetails | null
    error: string | null
}

const initMovieSliceState: MovieSliceType = {movies: [], movie: null, error: null}

const loadMovies = createAsyncThunk(
    'loadMovies',
    async (page: string, thunkAPI) => {
        try {
            const movies = await movieService.getMovies(page);
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error ${e}`)
        }
    }
);

const loadMovie = createAsyncThunk(
    'loadMovie',
    async (id: string, thunkAPI) => {
        try {
            const movie = await movieService.getMovieCard(id);
            return thunkAPI.fulfillWithValue(movie);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error ${e}`)
        }
    }
);

const loadMoviesByGenres = createAsyncThunk(
    'loadMoviesByGenres',
    async (genres: number[], thunkAPI) => {
        try {
            const movies = await movieService.getMoviesByGenres(genres);
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error ${e}`)
        }
    }
);

const loadMoviesByTitle = createAsyncThunk(
    'loadMoviesByTitle',
    async (titleValue: string, thunkAPI) => {
        try {
            const movies = await movieService.getMoviesByTitle(titleValue);
            return thunkAPI.fulfillWithValue(movies);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error ${e}`)
        }
    }
);

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initMovieSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload;
        })
        .addCase(loadMovies.rejected, (state, action) => {
            state.error = action.payload as string;
            console.log(state);
        })

        .addCase(loadMovie.fulfilled, (state, action: PayloadAction<IMovieDetails>) => {
            state.movie = action.payload;
        })
        .addCase(loadMovie.rejected, (state, action) => {
            state.error = action.payload as string;
            console.log(state);
        })

        .addCase(loadMoviesByGenres.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload;
        })
        .addCase(loadMoviesByGenres.rejected, (state, action) => {
            state.error = action.payload as string;
            console.log(state)
        })

        .addCase(loadMoviesByTitle.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
            state.movies = action.payload;
        })

});

export const moviesActions = {...movieSlice.actions, loadMovies, loadMovie, loadMoviesByGenres, loadMoviesByTitle};