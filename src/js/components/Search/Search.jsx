import React from 'react';

import {
    updateMovie,
    getMovie
 } from './searchActions'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleMovieInput = this.handleMovieInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleMovieInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateMovie(value));
    }

    handleSearch(e) {
        e.preventDefault();
        const { dispatch, movieSearch } = this.props;
        dispatch(getMovie(movieSearch))
    }

    render() {
        const { movieSearch } = this.props;
        return (
            <div className='container'>
                <form onSubmit={ this.handleSearch } >
                    <div className='row'>
                        <div className='input-group'>
                            <input autoComplete='false' required type='text' className='form-control' name='search' placeholder='Search' value={ movieSearch } onChange={ this.handleMovieInput }/>
                            <div className='input-group-append'>
                                <button className='btn btn-outline-secondary' id='search' type='submit'>Go!</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}