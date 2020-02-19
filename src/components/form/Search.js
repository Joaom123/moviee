import React, {Component} from "react";
import {getMoviesBySearch} from "../../services/api/omdbConnection";

class Search extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const valor = this.state.value;
        const listaDeFilmesPesquisados = getMoviesBySearch(valor);
        console.log(listaDeFilmesPesquisados);
    }

    render() {
        const {} = this.props;

        return (
            <form action="" className='searchForm'>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Pesquisar" onClick={this.handleSubmit}/>
            </form>
        );
    }
}

export default Search;