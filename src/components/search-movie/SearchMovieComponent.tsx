import {useForm} from "react-hook-form";
import type {ISearchForm} from "../../models/form/ISearchForm.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {searchMovieValidator} from "../../validators/search.validator.ts";
import {useAppDispatch} from "../../redux/hooks/UseAppDispatch.tsx";
import {moviesActions} from "../../redux/slices/movieSlice.ts";

const SearchMovieComponent = () => {

    const dispatch = useAppDispatch();
    const {handleSubmit, register, formState: {errors}}
        = useForm<ISearchForm>({mode: 'onSubmit', resolver: joiResolver(searchMovieValidator)});

    const searchHandler = (FormDataProps: ISearchForm) => {
        dispatch(moviesActions.loadMoviesByTitle(FormDataProps.movieSearchTitle));
    }

    return (
        <div className={'searchbar'}>
            <form onSubmit={handleSubmit(searchHandler)}>
                <label>
                    <input type="text" {...register('movieSearchTitle')} className={'border-2'}/>
                    {errors.movieSearchTitle && <div>{errors.movieSearchTitle.message}</div>}
                </label>

                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchMovieComponent;