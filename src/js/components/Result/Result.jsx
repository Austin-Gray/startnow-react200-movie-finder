import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movies} = this.props;
        return (
            <div className='container m-0 p-0'>
                <div className='row'>
                    <h4 className='col-2'>Results:</h4>
                </div>
                <ul className='row justify-content-center p-0 m-0'>
                    {
                        movies.map(movie => (
                            <li className='bg-light border border-dark col-12 mt-3 mb-3'>
                                <div className='container'>
                                    <div className='row'>
                                        <img className='col-3 mt-3 mb-3' src={movie.Poster}></img>
                                        <div className='col-9 mt-3 mb-3'>
                                            <h5>{movie.Title}</h5>
                                            <p>{movie.Year}</p>
                                            <hr></hr>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}