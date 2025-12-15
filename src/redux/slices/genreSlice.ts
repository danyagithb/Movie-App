import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {genreService} from "../../services/api.service.ts";

type GenreSliceType = {
    genres: IGenre[],
    selectedGenres: number[],
    error: string | null
};

const initGenreSliceState: GenreSliceType = {genres: [], selectedGenres: [], error: null};

const loadGenres = createAsyncThunk(
    'loadGenres',
    async (_, thunkAPI) => {
        try {
            const genres = await genreService.getGenres();
            return thunkAPI.fulfillWithValue(genres);
        } catch (e) {
            return thunkAPI.rejectWithValue(`some error ${e}`)
        }
    }
);

export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: initGenreSliceState,
    reducers: {
        toggleGenres: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            if (state.selectedGenres.includes(id)) {
                state.selectedGenres = state.selectedGenres.filter((g) => g !== id)
            } else {
                state.selectedGenres.push(id);
            }
        }
    },
    extraReducers: builder => builder
        .addCase(loadGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
            state.genres = action.payload;
        })
        .addCase(loadGenres.rejected, (state, action) => {
            state.error = action.payload as string;
            console.log(state);
        })
});

export const genreActions = {...genreSlice.actions, loadGenres};