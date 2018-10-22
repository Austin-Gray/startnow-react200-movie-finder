import React from 'react';
import Search from '../components/Search';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container d-flex flex-column justify-content-center'>
                <div className='row heading jumbotron text-dark bg-light mt-3'>
                    <h1 className='display-4 col-12'>Origin Movie Finder</h1>
                </div>
                <div className='row mb-3'>
                    <Search />
                </div>
            </div>
        )
    }
}

export default MovieSearchContainer;
