import { createStore, combineReducers, applyMiddleware } from 'redux'
import ErrorReducer from '../reducer/ErrorReducer'
import ResultsReducer from '../reducer/ResultsReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    ErrorReducer,
    ResultsReducer
});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
  )(createStore);

const store = createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store