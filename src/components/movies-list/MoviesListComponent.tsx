import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";
import type {IMovie} from "../../models/movie/IMovie.ts";
import MoviesListCardComponent from "../movies-list-card/MoviesListCardComponent.tsx";
import {useSearchParams} from "react-router";
import GenresFilterComponent from "../genres-filter/GenresFilterComponent.tsx";
import SearchMovieComponent from "../search-movie/SearchMovieComponent.tsx";

const MoviesListComponent = () => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector((state) => state.movieStoreSlice.movies);
    const [query] = useSearchParams();

    useEffect(() => {
        const page = query.get('page');

        dispatch(moviesActions.loadMovies(page || '1'))
    }, [query, dispatch]);

    return (
        <div>
            <div>
                <SearchMovieComponent/>
                <GenresFilterComponent/>
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