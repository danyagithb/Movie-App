import type {FC} from "react";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {genreColors} from "../../constans/genreColors.ts";

type GenrePropsType = {
    genre: IGenre
}

const GenreBadgeComponent: FC<GenrePropsType> = ({genre}) => {

    const colorBadge = genreColors[genre.name] || "#fd8d8d";

    return (
        <li className="px-2 py-1 rounded-full text-white inline-block mr-1 text-center font-bold"
            style={{backgroundColor: colorBadge}}>
            {genre.name}
        </li>
    );
};

export default GenreBadgeComponent;