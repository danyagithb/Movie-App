import "./movie-info.css"
import type {FC} from "react";
import type {IMovie} from "../../models/movie/IMovie.ts";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import type {IGenre} from "../../models/genre/IGenre.ts";
import GenreBadgeComponent from "../genre-bange/GenreBadgeComponent.tsx";
import StarsRatingComponent from "../stars-rating/StarsRatingComponent.tsx";

type MoviePropsType = {
    movie: IMovie
}

const MovieInfoComponent: FC<MoviePropsType> = ({movie}) => {

    const allGenres: IGenre[] = useAppSelector((state) => state.genreStoreSlice.genres);
    const genresId: number[] = movie.genre_ids;

    const movieGenres: IGenre[] = allGenres.filter(g => genresId?.includes(g.id));

    return (
        <div className={'movie-info'}>
            <h3 className={'text-2xl font-bold'}>{movie.title}</h3>
            <p>{movie.overview}</p>
            <ul className={'badges'}>
                {movieGenres.map((genre: IGenre) => <GenreBadgeComponent genre={genre} key={genre.id}/>)}
            </ul>
            <div>
                <StarsRatingComponent key={movie.id} rating={movie.vote_average}/>
            </div>
        </div>
    );
};

export default MovieInfoComponent;