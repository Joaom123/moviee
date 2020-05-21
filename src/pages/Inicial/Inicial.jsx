import React, {Component} from 'react';
import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import apiService from "../../services/apiService";
import "material-design-icons/iconfont/material-icons.css";

class Inicial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            page: 1,
            movies: [],
            totalResults: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.getMoviesBySearchValueAndPage = this.getMoviesBySearchValueAndPage.bind(this);
        this.page = this.page.bind(this);
    }

    getMoviesBySearchValueAndPage({searchValue, page = 1}) {
        apiService.getMoviesList({searchValue, page})
        .then(response => {
            console.log(response);
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

    page(e, page) {
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

        this.setState({
            searchValue
        });

        if(searchValue.length >= 3)
            this.getMoviesBySearchValueAndPage({searchValue});
    }

    clickOnCardHandle = imdbId =>
        apiService.getMovieByImdbId({imdbId})
        .then(response => {
            console.log(response.data);
            //TODO: setMovie with data
        });

    render() {
        return (
            <main>
                <div className="container">
                    <SearchForm
                        searchValue={this.state.searchValue}
                        handleChange={this.handleChange}
                    />
                    <section className="moviesCards">{
                        this.state.movies.map(movie =>
                            <Card
                                key={movie.imdbID}
                                filme={movie}
                                onClick={() => this.clickOnCardHandle(movie.imdbID)}
                            />
                        )
                    }
                    </section>
                    <ul className="pagination">
                        {/*<li className="disabled">*/}
                        <li className={this.state.page === 1 ? "disabled" : "waves-effect"}>
                            <a href="#!" onClick={(e) => this.page(e, this.state.page - 1)}>
                            <i className="material-icons">chevron_left</i></a>
                        </li>
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className={this.state.page === Math.floor(this.state.totalResults/10) ? "disabled" : "waves-effect"}>
                            <a href="#!" onClick={(e) => this.page(e, this.state.page + 1)}>
                            <i className="material-icons">chevron_right</i></a>
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

export default Inicial;
