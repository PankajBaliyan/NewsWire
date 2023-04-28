import { combineReducers } from 'redux'
import news from './newReducer'
const AppReducers = combineReducers({
    news
});

export default AppReducers;