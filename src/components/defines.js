export const MOVIE_API = {
    URL: 'https://api.themoviedb.org/3/discover/',
    IMG_URL: 'https://image.tmdb.org/t/p/w500',
    ACTIONS: {
        REQ_OPTIONS: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzQ3MWY0N2E5OTAxZWQ0YmU4YTJjMmEzN2RkYjJjOCIsInN1YiI6IjY2NTMzNzc0NDUwOTg2YjE3ZjE3NTcyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G46bKoNyegAnxbAx6yTFR7OdYi4uqHTgKnnDF8lDUZs'
            }
        },
        MOVIE: 'movie',
        TV_SERIES: 'tv'
    },
    getActionUrl(action) { return this.URL + action } 
}