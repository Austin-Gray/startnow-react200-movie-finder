const defaultState = {
    movieSearch: '',
    movies: [],
};

export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_MOVIE': {
            return {
                ...state,
                movieSearch: payload.movieSearch
            }
        }
        case 'GET_MOVIE_FULFILLED': {
            return {
                ...state,
                movies: payload.data.Search
            }
        }
        default: {
            return state;
        }
    }
}
