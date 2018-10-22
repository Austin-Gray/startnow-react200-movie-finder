import { connect } from 'react-redux';
import Result from './Result';

function mapStoreToProps(store) {
    return {
        movieSearch: store.search.movieSearch,
    };
}

export default connect(mapStoreToProps)(Result);
