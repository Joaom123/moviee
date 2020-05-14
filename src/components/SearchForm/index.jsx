import React from "react";

const SearchForm = props => {

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(props.searchValue);
    }

    return (
        <div className="row">
            <form className="col s12" action="">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            className="validate"
                            type="text"
                            id="nomeFilme"
                            value={props.searchValue}
                            onChange={props.handleChange}
                            name="nomeFilme"
                        />
                        <label htmlFor="nomeFilme">Nome do Filme</label>
                    </div>
                    <input
                        type="submit"
                        value="Pesquisar"
                        onClick={(event) => handleSubmit(event)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;