import React, {Component} from 'react';
import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import apiService from "../../services/apiService";
import Button from "../../components/Button";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "marvel",
            page: 1,
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
        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    searchMovies (searchValue) {
        apiService.ListaFilmes({searchValue})
            .then(response => {
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

    onButtonClick () {
        let page = this.state.page + 1;
        let searchValue = this.state.searchValue;

        apiService.ListaFilmes({searchValue, page})
        .then(response => {
            if(response.data.Response === 'True'){
                console.log(response);
                this.setState({
                    page: page,
                    filmes: response.data.Search
                });
            }
        })
    }

    handleChange (event) {
        this.setState({
            searchValue: event.target.value
        });
    }

    render() {
        return (
            <main>
                <div className="container">
                    <SearchForm
                        onSubmit={this.searchMovies}
                        searchValue={this.state.searchValue}
                        handleChange={this.handleChange}
                    />
                    <section className="grid-template">
                        {
                            this.state.filmes.map( filme =>
                                <Card filme = {filme}/>
                            )
                        }
                    </section>
                    <Button onClick={this.onButtonClick}/>
                </div>
            </main>
        );
    }
}

export default App;
