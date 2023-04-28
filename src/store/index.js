import { applyMiddleware, compose, createStore } from "redux";
import AppReducers from "./reducers";
import promiseMiddleWare from 'redux-promise'

const ReduxStore = () => {

    const webToolEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewareEnhancers = applyMiddleware(promiseMiddleWare);
    const composedEnhancers = webToolEnhancers(middlewareEnhancers)
    const store = createStore(AppReducers, composedEnhancers);
    return store;
}

export default ReduxStore;