export const fetchMoviesAction = (movies) => ({
    type: 'FETCH_MOVIES',
    payload: {
        movies: movies
    }
});

export const addToFavoritesAction = (imdbID, title, year) => ({
    type: 'ADD_TO_FAVORITE',
    payload: {
        imdbID: imdbID,
        title: title,
        year: year,
    }
});