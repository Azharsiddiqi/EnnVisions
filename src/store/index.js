import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// importing redux
import mainCategoryReducer from './mainCategory/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  mainCategory: mainCategoryReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
