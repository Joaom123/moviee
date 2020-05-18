import React, {Component} from 'react';
import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";
import Button from "../../components/Button";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import apiService from "../../services/apiService";

class Inicial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            page: 1,
            filmes: [],
        };

        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getMoviesBySearchValueAndPage = this.getMoviesBySearchValueAndPage.bind(this);
    }

    getMoviesBySearchValueAndPage({searchValue, page = 1}) {
        apiService.getMoviesList({searchValue, page})
        .then(response => {
            console.log(response);
            if (response.data.Response === 'True') {
                this.setState({
                    page,
                    filmes: response.data.Search
                });
            } else {
                //TODO: Mensagem de erro
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    onButtonClick() {
        let page = this.state.page + 1;
        let searchValue = this.state.searchValue;

        this.getMoviesBySearchValueAndPage({searchValue, page});
    }

    handleChange(event) {
        let searchValue = event.target.value;

        this.setState({
            searchValue
        });

        if(searchValue.length >= 3)
            this.getMoviesBySearchValueAndPage({searchValue});
    }

    render() {
        return (
            <main>
                <div className="container">
                    <SearchForm
                        searchValue={this.state.searchValue}
                        handleChange={this.handleChange}
                    />
                    <section className="grid-template">{
                        this.state.filmes.map(filme =>
                            <Card filme={filme} key={filme.imdbID}/>
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
