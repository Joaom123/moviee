import React, {Component} from 'react';

import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "material-design-icons/iconfont/material-icons.css";

import Modal from "../../components/Modal";
import Movies from "../../components/Movies";
import SearchForm from "../../components/SearchForm";
import Pagination from "../../components/Pagination";

import apiService from "../../services/apiService";

class Inicial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            page: 1,
            movies: [],
            movie: [],
            totalResults: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.getMoviesBySearchValueAndPage = this.getMoviesBySearchValueAndPage.bind(this);
        this.handleChangeOfPage = this.handleChangeOfPage.bind(this);
    }

    getMoviesBySearchValueAndPage({searchValue, page = 1}) {
        apiService.getMoviesList({searchValue, page})
        .then(response => {
            if (response.data.Response === 'True') {
                this.setState({
                    page,
                    movies: response.data.Search,
                    totalResults: response.data.totalResults
                });
            } else {
                //TODO: Mensagem de erro
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleChangeOfPage(e, page) {
        e.preventDefault();
        let searchValue = this.state.searchValue;

        if (searchValue === "")
            return ;

        if (page < 1)
            return ;

        this.getMoviesBySearchValueAndPage({searchValue, page});
    }

    handleChange(event) {
        let searchValue = event.target.value;

        if (searchValue === " ")
            return ;

        this.setState({searchValue});

        if(searchValue.length >= 3)
            this.getMoviesBySearchValueAndPage({searchValue: searchValue.trim()});
    }

    onCardClick = (imdbId) =>
        apiService.getMovieByImdbId({imdbId})
        .then(response => {
            this.setState({movie: response.data})
            console.log(response.data);
            //TODO: Open Modal
        });

    render() {
        return (
            <main>
                <div className="container">
                    <SearchForm
                        searchValue={this.state.searchValue}
                        handleChange={this.handleChange}
                    />
                    <Movies
                        movies={this.state.movies}
                        onCardClick={this.onCardClick}
                    />
                    <Pagination
                        totalResults={this.state.totalResults}
                        page={this.state.page}
                        handleChangeOfPage={this.handleChangeOfPage}
                    />
                    <Modal movie={this.state.movie}/>
                </div>
            </main>
        );
    }
}

export default Inicial;
