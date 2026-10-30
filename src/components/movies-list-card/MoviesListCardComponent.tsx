import type {FC} from "react";
import type {IMovie} from "../../models/movie/IMovie.ts";
import {Link} from "react-router";
import MovieInfoComponent from "../movie-info/MovieInfoComponent.tsx";
import PosterPreview from "../poster-preview/PosterPreview.tsx";

type CardPropsType = {
    card: IMovie
}

const MoviesListCardComponent: FC<CardPropsType> = ({card}) => {
    return (
        <div className={'border-2 border-gray-950 p-3'}>
            <Link to={`${card.id}/details`}>
                <PosterPreview image={card.poster_path} title={card.title}/>
                <MovieInfoComponent movie={card}/>
            </Link>
        </div>
    );
};

export default MoviesListCardComponent;