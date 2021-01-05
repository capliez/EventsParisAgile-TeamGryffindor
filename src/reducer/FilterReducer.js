const initialState = {
    isLoaded: false,
    filter: null,
}

function FilterReducer(state = initialState, action) {
    switch (action.type) {
        case 'ERROR_LOADED' :
            return {
                ...state,
                isLoaded: true,
                filter : action.filter,
            }
            default: return state;
    }

}

export default FilterReducer;