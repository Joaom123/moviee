import React, {Component} from 'react';
import {ModalMovie, Movies, Pagination, SearchForm} from "../../components";
import {apiService} from "../../services";

class Initial extends Component {
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

        this.handleChangeOfSearchValue = this.handleChangeOfSearchValue.bind(this);
        this.handleChangeOfPage = this.handleChangeOfPage.bind(this);
        this.onCardClick = this.onCardClick.bind(this);
    }

    onCloseModal = () => this.setState({toggleModal: false});

    isSearchValueEmpty = () => this.state.searchValue === "";

    isSearchValueLongerThan3Characters = () => this.state.searchValue.length >= 3;

    getMoviesListBySearchValueAndPage = () => {
        const {searchValue, page} = this.state;
        console.log(page);
        apiService
            .getMoviesList({searchValue, page})
            .then(response => {
                const {Response, Search, totalResults} = response.data;

                if (Response === 'True') {
                    this.setState({
                        page,
                        movies: Search,
                        totalResults
                    });
                } else {
                    const {Error} = response.data;
                    console.log(Error);
                    //TODO: Mensagem de erro
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    makeGet = () => {
        if (!this.isSearchValueEmpty() && this.isSearchValueLongerThan3Characters())
            this.getMoviesListBySearchValueAndPage();
    }

    handleChangeOfSearchValue(event) {
        let searchValue = event.target.value;

        if (searchValue === " ")
            return ;

        this.setState({searchValue});

        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.makeGet(), 1000);
    }

    handleChangeOfPage(e, page) {
        e.preventDefault();

        this.setState({page});

        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.makeGet(), 1000);
    }

    onCardClick(imdbId) {
        apiService
            .getMovieByImdbId({imdbId})
            .then(response => {
                this.setState({
                    movie: response.data,
                    toggleModal: true
                });
            });
    }

    render() {
        const {searchValue, movies, totalResults, page, movie, toggleModal} = this.state;

        return (
            <main className="container">
                <SearchForm
                    searchValue={searchValue}
                    handleChange={this.handleChangeOfSearchValue}
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

export default Initial;
