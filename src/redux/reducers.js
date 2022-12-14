const initialState = {
	movieList: [],
	favoriteList: [],  
};

function movieReducer(state = initialState, action) {
	switch (action.type) {
		case 'SEARCH_MOVIE':
			return {...state, movieList: action.payload.movies };

		default:
			return state;
	}
}

export default movieReducer;