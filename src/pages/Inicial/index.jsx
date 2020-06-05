import React, {Component} from 'react';
import {Modal, ModalMovie, Movies, Pagination, SearchForm} from "../../components";
import apiService from "../../services/apiService";

class Inicial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            page: 1,
            movies: [],
            movie: [],
            totalResults: 0,
            toggleModal: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.getMoviesBySearchValueAndPage = this.getMoviesBySearchValueAndPage.bind(this);
        this.handleChangeOfPage = this.handleChangeOfPage.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
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
        .then(response =>
            this.setState({
                movie: response.data,
                toggleModal: true
            })
        );

    onCloseModal = () => this.setState({toggleModal: false});

    render() {
        const { searchValue, movies, totalResults, page, movie, toggleModal } = this.state;

        return (
            <main className="container">
                <SearchForm
                    searchValue={searchValue}
                    handleChange={this.handleChange}
                />
                <Movies
                    movies={movies}
                    onCardClick={this.onCardClick}
                />
                <Pagination
                    totalResults={totalResults}
                    page={page}
                    handleChangeOfPage={this.handleChangeOfPage}
                />
                <ModalMovie
                    toggleModal={toggleModal}
                    onCloseModal={this.onCloseModal}
                    movie={movie}
                />
            </main>
        );
    }
}

export default Inicial;
