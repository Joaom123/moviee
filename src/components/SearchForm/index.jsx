import React from "react";

const SearchForm = props =>
    <div className="row">
        <form className="col s12">
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
            </div>
        </form>
    </div>

export default SearchForm;