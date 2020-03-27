import React, {Component} from 'react';
import SearchForm from "./components/SearchForm";
import Card from "./components/Card";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import apiService from "./services/apiService";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filmes:
                [
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Captain Marvel",
                        "Year": "2019",
                        "imdbID": "tt4154664",
                        "Type": "movie",
                        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
                    }
                ]
        };

        this.searchMovies = this.searchMovies.bind(this);
    }

    searchMovies(entrada) {
        apiService.ListaFilmes(entrada)
            .then(response => {
                console.log(response);
                if(response.data.Response === 'True'){
                    this.setState({
                        filmes: response.data.Search
                    })
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <main>
                <div className="container">
                    <SearchForm onSubmit={this.searchMovies} />
                    <section className="grid-template">
                        {
                            this.state.filmes.map( filme =>
                                <Card filme = {filme}/>
                            )
                        }
                    </section>
                </div>
            </main>
        );
    }
}

export default App;
