import { createStore, combineReducers, applyMiddleware } from 'redux'
import ErrorReducer from '../reducer/ErrorReducer'
import ResultsReducer from '../reducer/ResultsReducer'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
    ErrorReducer,
    ResultsReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

export default store