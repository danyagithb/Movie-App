export const urls = {
    movies: {
        allMovies: (page: string) => {
            return '/discover/movie?page=' + page;
        },
        byId: (id: string) => {
            return '/movie/' + id;
        },
        byGenres: (genres: string, page: string) => {
            return '/discover/movie?with_genres=' + genres + '?page=' + page;
        }
    },
    genres: {
        allGenres: '/genre/movie/list'
    }
}