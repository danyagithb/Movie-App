import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";
import type {IMovie} from "../../models/IMovie.ts";
import MoviesListCardComponent from "../movies-list-card/MoviesListCardComponent.tsx";

const MoviesListComponent = () => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector((state) => state.movieStoreSlice.movies)

    useEffect(() => {
        dispatch(moviesActions.loadMovies())
    }, []);

    return (
        <div>
            {
                movies.map((card: IMovie) => <MoviesListCardComponent key={card.id} card={card}/>)
            }
        </div>
    );
};

export default MoviesListComponent;