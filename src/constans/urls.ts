export const urls = {
    movies: {
        allMovies: (page: string) => {
            return '/discover/movie?page=' + page;
        },
        byId: (id: string) => {
            return '/movie/' + id;
        },
        byGenres: (genres: string, page: string) => {
            return '/discover/movie?with_genres=' + genres + '&page=' + page;
        },
        byTitle: (title: string) => {
            return '/search/movie?query=' + title;
        },
        bySort: (sort: string, page: string) => {
            return 'discover/movie?sort_by=' + sort + '&page=' + page;
        }
    },
    genres: {
        allGenres: '/genre/movie/list'
    }
}