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

    doesGetMoviesListIfValidSearchValue = () => {
        if (this.isSearchValueValid())
            this.getMoviesListAndSetMovies();
    }

    doesGetMoviesListWithTimeout = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(
            () => this.doesGetMoviesListIfValidSearchValue(),
            300
        );
    }

    isSearchValueNotEmpty = () => this.state.searchValue !== "";

    isSearchValueLongerThan3Characters = () => this.state.searchValue.length >= 3;

    isSearchValueValid = () => this.isSearchValueNotEmpty() && this.isSearchValueLongerThan3Characters();

    getMoviesListAndSetMovies = () => {
        const {searchValue, page} = this.state;
        apiService
            .getMoviesList({searchValue, page})
            .then(response => {
                const {Response, Search, totalResults} = response.data;

                if (Response === 'True') {
                    this.setState({
                        movies: Search,
                        totalResults
                    });
                } else {
                    const {Error} = response.data;
                    //TODO: Mensagem de erro
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {searchValue, page} = this.state;
        if(searchValue !== prevState.searchValue || page !== prevState.page)
            this.doesGetMoviesListWithTimeout();
    }

    handleChangeOfSearchValue(event) {
        let searchValue = event.target.value;

        if (searchValue === " ")
            return ;

        this.setState({searchValue});
    }

    handleChangeOfPage(e, page) {
        e.preventDefault();
        this.setState({page});
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
