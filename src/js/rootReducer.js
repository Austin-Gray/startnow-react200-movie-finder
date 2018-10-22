import { combineReducers } from 'redux';
import searchReducer from './components/Search/SearchReducer';
//import resultReducer from './components/Result/resultReducer';
//import detailReducer from './components/Detail/detailReducer';

const rootReducer = combineReducers({
    search: searchReducer,
//    result: resultReducer,
//    detail: detailReducer
});

export default rootReducer;
