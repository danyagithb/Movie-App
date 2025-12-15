import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genreSlice.ts";
import type {IGenre} from "../../models/genre/IGenre.ts";
import GenreComponent from "../genre/GenreComponent.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";

const GenresFilterComponent = () => {

    const dispatch = useAppDispatch();
    const genres = useAppSelector((state) => state.genreStoreSlice.genres);
    const selectedGenres = useAppSelector((state) => state.genreStoreSlice.selectedGenres);

    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, [dispatch]);

    const toggleGenre = (id: number) => {
        let newSelected: number[];

        if (selectedGenres.includes(id)) {
            newSelected = selectedGenres.filter(g => g !== id);
        } else {newSelected = [...selectedGenres, id];}

        dispatch(genreActions.toggleGenres(id));

        if (newSelected.length > 0) {
            dispatch(moviesActions.loadMoviesByGenres(newSelected));
        } else {dispatch(moviesActions.loadMovies('1'));}
    };


    return (
        <div>
            {
                genres.map((genre: IGenre) => <GenreComponent
                    key={genre.id}
                    genre={genre}
                    checked={selectedGenres.includes(genre.id)}
                    onToggle={toggleGenre}
                />)
            }
        </div>
    );
};

export default GenresFilterComponent;