import React from 'react';
import { Link } from 'react-router-dom';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movies } = this.props;
        return (
            <div className='container m-0 p-0'>
                <div className='row'>
                    <h4 className='col-2'>Results:</h4>
                </div>
                <ul className='row justify-content-center p-0 m-0'>
                    {
                        movies ?
                        movies.map(movie => (
                            <li className='bg-light border border-dark col-12 mt-3 mb-3'>
                                <div className='container'>
                                    <div className='row'>
                                        <img className='col-3 mt-3 mb-3' src={movie.Poster}></img>
                                        <div className='col-9 mt-3 mb-3'>
                                            <h5>{movie.Title}</h5>
                                            <p>{movie.Year}</p>
                                            <hr></hr>
                                            <Link className='detail-link' to={`/movie/${movie.imdbID}`}>Read more</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                        :
                        <h1 className='error-message'>Movie not found!</h1>
                    }
                </ul>
            </div>
        )
    }
}