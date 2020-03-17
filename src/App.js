import React, {Component} from 'react';
import SearchForm from "./components/SearchForm";
import api from "./services/api";
import Card from "./components/Card";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

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

    async searchMovies(entrada) {
        const resp = await api.get('', {
            params: {
                apikey: 'e7bf29e9',
                s: entrada,
            }
        }).then(response => response.data);

        if(resp.Response){
            this.setState({
                filmes: resp.Search
            });
        }
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
