import React from 'react';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import MovieSearchContainer from './MovieSearchContainer';
import MovieDetailContainer from './MovieDetailContainer';

export default () => (
    <Router>
        <div className='container'>
            <Route exact path='/' component={MovieSearchContainer} />
            <Route path='/movie/:id' component={MovieDetailContainer} />
        </div>
    </Router>
);
