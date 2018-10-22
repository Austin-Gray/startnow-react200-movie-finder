const defaultState = {
    movieSearch: '',
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
        default: {
            return state;
        }
    }
}
