export const urls = {
    movies: {
        allMovies: '/discover/movie',
        byId: (id: string) => {
            return '/movie/' + id;
        }
    }
}