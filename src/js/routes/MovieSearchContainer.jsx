import React from 'react';
import Search from '../components/Search';
import Result from '../components/Result';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 heading jumbotron text-dark bg-light mt-3'>
                        <h1 className='display-4'>Origin Movie Finder</h1>
                    </div>
                </div>
                <div className='row mb-4'>
                    <Search className='col-12' />
                </div>
                <div className='row justify-content-center'>
                    <Result className='col-12' />
                </div>
            </div>
        )
    }
}

export default MovieSearchContainer;
