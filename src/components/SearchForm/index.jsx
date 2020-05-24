import React from "react";

const SearchForm = ({searchValue, handleChange}) =>
    <div className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <input
                        className="validate"
                        type="text"
                        id="nomeFilme"
                        value={searchValue}
                        onChange={handleChange}
                        name="nomeFilme"
                    />
                    <label htmlFor="nomeFilme">Nome do Filme</label>
                </div>
            </div>
        </form>
    </div>

export default SearchForm;