const axios = require('axios');

export const updateMovie = (movieSearch) => ({
    type: 'UPDATE_MOVIE',
    payload: { movieSearch }
})

export const getMovie = (movieSearch) => ({
    type: 'GET_MOVIE',
    payload: axios.get(`/movie/${movieSearch}`)
});
