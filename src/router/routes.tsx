import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: 'movies', element: <MoviesPage/>},
        {path: 'movies/:movieId/details', element: <MovieDetailsPage/>}
    ]
}]);