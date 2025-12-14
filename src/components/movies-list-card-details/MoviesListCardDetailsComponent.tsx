import {type FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";

type DetailsPropsType = {
    movieId: string
}

const MoviesListCardDetailsComponent: FC<DetailsPropsType> = ({movieId}) => {


    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(({movieStoreSlice}) => movieStoreSlice)

    useEffect(() => {
        if (movieId) {
            dispatch(moviesActions.loadMovie(movieId))
        }
    }, [movieId, dispatch]);

    return (
        <div>
            {movie &&
                <div>
                    <div>{movie.id} - {movie.title}</div>
                </div>
            }
        </div>
    );
};

export default MoviesListCardDetailsComponent;