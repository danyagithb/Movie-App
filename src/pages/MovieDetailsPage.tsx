import MoviesListCardDetailsComponent from "../components/movies-list-card-details/MoviesListCardDetailsComponent.tsx";
import {useParams} from "react-router";

const MovieDetailsPage = () => {

    const {movieId} = useParams();

    return (
        <div>
            <MoviesListCardDetailsComponent movieId={movieId}/>
        </div>
    );
};

export default MovieDetailsPage;