import axios from "axios";

const apiKey = 'e7bf29e9';
const url = 'http://www.omdbapi.com';

const apiService = {
    listaFilmes: ({searchValue, page = 1}) => {
        return axios.get(url, {
            params: {
                apikey: apiKey,
                s: searchValue,
                t: "movie",
                page: page,
                plot: "full"
            },
        });
    },
};

export default apiService;