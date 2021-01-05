const initialState = {
    isLoaded: false,
    results: null,
}

function SearchResultsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SearchResults_LOADED' :
            return {
                ...state,
                isLoaded: true,
                results: action.results,
            }
            default: return state;
    }

}

export default SearchResultsReducer;