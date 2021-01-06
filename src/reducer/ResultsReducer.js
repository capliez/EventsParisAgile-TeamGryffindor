const initialState = {
    isLoaded: false,
    results: null,
}

function ResultsReducer(state = initialState, action) {
    switch (action.type) {
        case 'RESULTS_LOADED' : 
            return {
                ...state,
                isLoaded: action.value.bool,
                results: action.value.array,
            }
            default: return state;
    }

}

export default ResultsReducer;