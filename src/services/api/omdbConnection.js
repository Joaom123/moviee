import axios from 'axios';

const apiKey = 'e7bf29e9';
const url = 'http://www.omdbapi.com';

const getMoviesBySearch = searchValue => {
    axios.get(url, {
        params: {
            apikey: apiKey,
            s: searchValue,
        },
    })
    .then(response => response.data)
    .catch(error => console.log(error));
};

const teste = (data) => data;

export {getMoviesBySearch};