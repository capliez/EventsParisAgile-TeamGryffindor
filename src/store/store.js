import { createStore, combineReducers } from 'redux'
import ErrorReducer from '../reducer/ErrorReducer'
import ResultsReducer from '../reducer/ResultsReducer'
import FilterReducer from '../reducer/FilterReducer'

const reducer = combineReducers({
    ErrorReducer,
    ResultsReducer,
    FilterReducer
});

const store = createStore(reducer)

export default store