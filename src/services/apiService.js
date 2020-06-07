import axios from "axios";

const apiKey = 'e7bf29e9';
const url = 'http://www.omdbapi.com';

const apiService = {
    getMoviesList: ({searchValue, page = 1}) => axios.get(url, {
        params: {
            apikey: apiKey,
            s: searchValue,
            type: "movie",
            page: page,
        },
    }),
    getMovieByImdbId: ({imdbId}) => axios.get(url, {
        params: {
            apikey: apiKey,
            i: imdbId,
            type: "movie",
            plot: "short"
        },
    }),
};

export default apiService;