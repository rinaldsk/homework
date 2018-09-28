import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ratesReducer from './rates/index';

const reducers = combineReducers({
	rates: ratesReducer
});

const enhancer = applyMiddleware(thunk);

const store = createStore(reducers, enhancer);
export default store;