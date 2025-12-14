import axios from "axios";
import type {IBaseResponseModel} from "../models/IBaseResponseModel.tsx";
import type {IMovie} from "../models/IMovie.ts";
import {urls} from "../constans/urls.ts";
import type {IMovieDetails} from "../models/IMovieDetails.ts";

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
    getMovies: async (): Promise<IMovie[]> => {
        const {data: {results}} = await axiosInstance.get<IBaseResponseModel>(urls.movies.allMovies);
        return results;
    },
    getMovieCard: async (id: string): Promise<IMovieDetails> => {
        const {data} = await axiosInstance.get(urls.movies.byId(id));
        return data;
    }
}