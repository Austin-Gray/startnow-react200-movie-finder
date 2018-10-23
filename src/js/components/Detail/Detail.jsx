import React from 'react';
import { Link } from 'react-router-dom';
import { getDetail } from './detailActions';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getDetail(this.props.movieID));
    }

    render() {
        const { movie } = this.props;
        return (
            <div className='container card mt-3 mb-3 p-0'>
                <div className='card-body'>
                    <div className='container'>
                        <div className='row'>
                            <img className='detail col-5 mt-3 mb-3' src={movie.Poster}></img>
                            <div className='col-7 mt-3 mb-3'>
                                <h2>{movie.Title}</h2>
                                <p>{movie.Year}</p>
                                <p>{movie.Rated}</p>
                                <hr></hr>
                                <p>{movie.Plot}</p>
                                <br></br>
                                <p>{movie.Awards}</p>
                                <br></br>
                                <h6>Metascore: {movie.Metascore}/100</h6>
                                <h6>IMDB: {movie.imdbRating}/10</h6>
                                <br></br>
                                <Link className='jusitfy-self-center' to='/'>Return to Search</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}