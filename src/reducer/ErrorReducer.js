const initialState = {
    isLoaded: false,
    error_name: null,
    error_description: null,
}

function ErrorReducer(state = initialState, action) {
    switch (action.type) {
        case 'ERROR_LOADED' :
            return {
                ...state,
                isLoaded: true,
                error_name: action.error_name,
                error_description: action.error_description,
            }
            default: return state;
    }

}

export default ErrorReducer;