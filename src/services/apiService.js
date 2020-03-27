import axios from "axios";

const apiKey = 'e7bf29e9';
const url = 'http://www.omdbapi.com';

const apiService = {
    ListaFilmes: (searchValue) => {
        return axios.get(url, {
            params: {
                apikey: apiKey,
                s: searchValue,
            },
        });
    },
}

export default apiService;