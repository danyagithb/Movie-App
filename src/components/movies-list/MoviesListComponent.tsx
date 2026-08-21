import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";
import type {IMovie} from "../../models/movie/IMovie.ts";
import MoviesListCardComponent from "../movies-list-card/MoviesListCardComponent.tsx";
import {useSearchParams} from "react-router";
import GenresFilterComponent from "../genres-filter/GenresFilterComponent.tsx";
import SearchMovieComponent from "../search-movie/SearchMovieComponent.tsx";
import SortedMoviesComponent from "../sorted-movies/SortedMoviesComponent.tsx";

const MoviesListComponent = () => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector((state) => state.movieStoreSlice.movies);
    const selectedGenres = useAppSelector((state) => state.genreStoreSlice.selectedGenres)
    const [query] = useSearchParams();

    useEffect(() => {
        const page = query.get('page') || '1';

        // dispatch(moviesActions.loadMovies(page || '1'));

        if (selectedGenres.length > 0) {
            dispatch(moviesActions.loadMoviesByGenres({ genres: selectedGenres, page: page }));
        }
        else {
            dispatch(moviesActions.loadMovies(page));
        }

    }, [query, selectedGenres, dispatch]);

    return (
        <div className={'movies-list'}>
            <div className={'toolbar'}>
                <SearchMovieComponent/>
                <GenresFilterComponent/>
                <SortedMoviesComponent/>
            </div>
            <div className={'grid grid-cols-4 p-4 gap-4'}>
                {
                    movies.map((card: IMovie) => <MoviesListCardComponent key={card.id} card={card}/>)
                }
            </div>
        </div>
    );
};

export default MoviesListComponent;