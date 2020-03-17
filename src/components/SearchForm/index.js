import React, {Component} from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valor: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            valor: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await this.props.onSubmit(this.state.valor);
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" action="">
                    <div className="row">
                        <div className="input-field col s6">
                            <input className="validate" type="text" id="nomeFilme" value={this.state.valor} onChange={this.handleChange}/>
                            <label htmlFor="nomeFilme">Nome do Filme</label>
                        </div>
                        <input type="submit" value="Pesquisar"
                               onClick={(event) => this.handleSubmit(event)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;