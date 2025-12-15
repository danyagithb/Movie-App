import axios from "axios";
import type {IBaseResponseModel} from "../models/IBaseResponseModel.tsx";
import type {IMovie} from "../models/movie/IMovie.ts";
import {urls} from "../constans/urls.ts";
import type {IMovieDetails} from "../models/movie/IMovieDetails.ts";
import type {IGenre} from "../models/genre/IGenre.ts";
import type {IGenreResponseModel} from "../models/genre/IGenreResponseModel.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const key = import.meta.env.VITE_API_KEY

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'}
});

axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + key;

    }
    return requestObject;
})

export const movieService = {
    getMovies: async (page: string): Promise<IMovie[]> => {
        const {data: {results}} = await axiosInstance.get<IBaseResponseModel>(urls.movies.allMovies(page));
        return results;
    },
    getMovieCard: async (id: string): Promise<IMovieDetails> => {
        const {data} = await axiosInstance.get(urls.movies.byId(id));
        return data;
    },
    getMoviesByGenres: async (genres: number[], page: string = '1'): Promise<IMovie[]> => {
        const genreParam = genres.join('|');
        const {data: {results}} = await axiosInstance.get<IBaseResponseModel>(urls.movies.byGenres(genreParam, page))
        return results;
    }
};

export const genreService = {
    getGenres: async  (): Promise<IGenre[]> => {
        const {data: {genres}} = await axiosInstance.get<IGenreResponseModel>(urls.genres.allGenres);
        return genres;
    }
}