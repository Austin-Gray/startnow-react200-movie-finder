import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {
        movieSearch: store.search.movieSearch,
    };
}

export default connect(mapStoreToProps)(Search);