import MoviesListComponent from "../components/movies-list/MoviesListComponent.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const MoviesPage = () => {
    return (
        <div className={'movies-page'}>
            <MoviesListComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;