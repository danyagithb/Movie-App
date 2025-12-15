import {createBrowserRouter} from "react-router";
import MoviesPage from "../pages/MoviesPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: ':movieId/details', element: <MovieDetailsPage/>}
        ]
    }
]);