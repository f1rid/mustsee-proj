const initialState = {
	movieList: [],
	favoriteList: [],  
};

function movieReducer(state = initialState, action) {
	switch (action.type) {
		case 'SEARCH_MOVIE':
			return {...state, movieList: action.payload.movies };

		case 'ADD_TO_FAVORITES':
			const findItem = state.favoriteList.some((movie) => movie.imdbID === action.payload.imdbID);
			return findItem ? state : {...state, favoriteList: [...state.favoriteList, action.payload]};

		default:
			return state;
	}
}

export default movieReducer;