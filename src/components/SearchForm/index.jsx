import React from "react";

function SearchForm({searchValue, handleChange}) {
    return(
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12 m6 offset-m3">
                        <input
                            className="validate"
                            type="text"
                            id="movieName"
                            value={searchValue}
                            onChange={handleChange}
                            name="movieName"
                        />
                        <label htmlFor="movieName">Nome do Filme</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;