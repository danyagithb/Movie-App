import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";
import {useSearchParams} from "react-router";

const SortedMoviesComponent = () => {

    const dispatch = useAppDispatch();
    const [query] = useSearchParams();

    return (
        <div>
            <select className=" bg-amber-50 text-black border p-2 rounded-lg" onChange={(e) =>
                dispatch(moviesActions.loadSortedMovies({
                sort: e.target.value,
                page: query.get('page') || '1'
            }))}>
                <option value="popularity.desc">По популярности</option>
                <option value="primary_release_date.desc">По дате выхода</option>
                <option value="title.asc">По названию</option>
                <option value="vote_average.desc">По рейтингу</option>
                <option value="vote_count.desc">По количеству оценок</option>

            </select>
        </div>
    );
};

export default SortedMoviesComponent;