import { connect } from 'react-redux';
import Detail from './Detail';

function mapStoreToProps(store) {
    return {
        movieSearch: store.search.movieSearch,
    };
}

export default connect(mapStoreToProps)(Detail);
