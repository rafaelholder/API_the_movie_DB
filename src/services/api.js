// Base url: https://api.themoviedb.org/3
// url example: https://api.themoviedb.org/3/movie/550?api_key=2224ef8819830b1e36fb12693c940006

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default api;
