const axios = require('axios');

export const getDetail = (movieID) => ({
    type: 'GET_DETAIL',
    payload: axios.get(`/movieDetail/${movieID}`)
});
