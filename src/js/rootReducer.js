import { combineReducers } from 'redux';
import searchReducer from './components/Search/SearchReducer';
import detailReducer from './components/Detail/detailReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    detail: detailReducer
});

export default rootReducer;
