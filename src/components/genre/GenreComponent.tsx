import type {FC} from "react";
import type {IGenre} from "../../models/genre/IGenre.ts";

type GenrePropsType = {
    genre: IGenre,
    checked: boolean,
    onToggle: (id: number) => void
};


const GenreComponent: FC<GenrePropsType> = ({genre, checked, onToggle}) => {
    return (
        <div className={"text-white"}>
            <label>
                {genre.name} <input type="checkbox" checked={checked} onChange={() => onToggle(genre.id)}/>
            </label>
        </div>
    );
};

export default GenreComponent;