import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {Link} from "react-router";

type CardPropsType = {
    card: IMovie
}

const MoviesListCardComponent: FC<CardPropsType> = ({card}) => {
    return (
        <div><Link to={`${card.id}/details`}>
            {card.title} = {card.id}
        </Link></div>
    );
};

export default MoviesListCardComponent;