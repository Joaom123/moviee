import React, {Component} from 'react';
import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import apiService from "../../services/apiService";
import Button from "../../components/Button";

class Inicial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            page: 1,
            filmes: [],
        };

        this.searchMovies = this.searchMovies.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getMoviesBySearchValueAndPage = this.getMoviesBySearchValueAndPage.bind(this);
    }

    getMoviesBySearchValueAndPage ({searchValue, page = 1}) {
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

    searchMovies (searchValue) {
        apiService.ListaFilmes({searchValue})
            .then(response => {
                console.log(response);
                if(response.data.Response === 'True'){
                    this.setState({
                        filmes: response.data.Search
                    })
                }else{
                    //TODO: Exibir mensagem de erro
                }
            })
            .catch(error => {
                console.log(error);
                //TODO: Exibir mensagem de erro
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

export default Inicial;
