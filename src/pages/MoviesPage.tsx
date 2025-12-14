import MoviesListComponent from "../components/movies-list/MoviesListComponent.tsx";
import HeaderComponent from "../components/header/HeaderComponent.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const MoviesPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <MoviesListComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;