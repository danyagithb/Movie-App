import type {FC} from "react";
import type {IMovie} from "../../models/movie/IMovie.ts";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import type {IGenre} from "../../models/genre/IGenre.ts";
import GenreBadgeComponent from "../genre-bange/GenreBadgeComponent.tsx";

type MoviePropsType = {
    movie: IMovie
}

const MovieInfoComponent: FC<MoviePropsType> = ({movie}) => {

    const allGenres: IGenre[] = useAppSelector((state) => state.genreStoreSlice.genres);
    const genresId: number[] = movie.genre_ids;

    const movieGenres: IGenre[] = allGenres.filter(g => genresId.includes(g.id));

    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <ul>
                {movieGenres.map((genre: IGenre) => <GenreBadgeComponent genre={genre} key={genre.id}/>)}
            </ul>
        </div>
    );
};

export default MovieInfoComponent;