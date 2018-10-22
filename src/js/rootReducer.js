import { combineReducers } from 'redux';
import searchReducers from './components/Search/searchReducers';
import resultReducers from './components/Result/resultReducers';
import detailReducers from './components/Detail/detailReducers';

const rootReducer = combineReducers({
    search: searchReducers,
    result: resultReducers,
    detail: detailReducers
});

export default rootReducer;
