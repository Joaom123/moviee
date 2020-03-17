import axios from 'axios';

const apiKey = 'e7bf29e9';
const url = 'http://www.omdbapi.com';

async function getMoviesBySearch(searchValue) {
    return await axios.get(url, {
        params: {
            apikey: apiKey,
            s: searchValue,
        },
    }).then(response => response.data);
}

export {getMoviesBySearch};