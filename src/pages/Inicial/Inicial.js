import React, {Component} from 'react';
import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import apiService from "../../services/apiService";
import Button from "../../components/Button";
import validacaoInput from "../../services/validacaoInputService";

class Inicial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            page: 1,
            filmes: [],
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getMoviesBySearchValueAndPage = this.getMoviesBySearchValueAndPage.bind(this);
    }

    getMoviesBySearchValueAndPage ({searchValue, page = 1}) {
        apiService.ListaFilmes({searchValue, page})
        .then(response => {
            console.log(response);
            if(response.data.Response === 'True'){
                this.setState({
                    page,
                    filmes: response.data.Search
                });
            }else{
                //TODO: Mensagem de erro
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    onSubmit (searchValue) {
        this.getMoviesBySearchValueAndPage({searchValue});
    }

    onButtonClick () {
        let page = this.state.page + 1;
        let searchValue = this.state.searchValue;

        this.getMoviesBySearchValueAndPage({searchValue, page});
    }

    handleChange (event) {
        let searchValue = event.target.value;

        validacaoInput.search(event);

        this.setState({
            searchValue
        });
    }

    render() {
        return (
            <main>
                <div className="container">
                    <SearchForm
                        onSubmit={this.onSubmit}
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
