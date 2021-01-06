const initialState = {
    isLoaded: false,
    results: null,
    currentEvent: [],
    isEvent: false
}

function ResultsReducer(state = initialState, action) {
    switch (action.type) {
        case 'RESULTS_LOADED' : 
            return {
                ...state,
                isLoaded: action.value.bool,
                results: action.value.array,
            }
        case 'CURRENT_EVENT':
            const { item, isEvent} = action.payload
            return {
                ...state,
                currentEvent: item,
                isEvent,
            }
            default: return state;
    }

}

export default ResultsReducer;