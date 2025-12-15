import type {IMovie} from "./movie/IMovie.ts";

export interface IBaseResponseModel {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}