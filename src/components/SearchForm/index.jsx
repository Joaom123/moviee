import React from "react";

function SearchForm({searchValue, handleChange}) {
    const onSubmit = (event) => event.preventDefault();

    return(
        <section className="row">
            <form className="col s12" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s12 m6 offset-m3">
                        <input
                            className="validate"
                            id="movieName"
                            name="movieName"
                            type="text"
                            value={searchValue}
                            onChange={handleChange}
                            data-testid="searchMovieInput"
                        />
                        <label htmlFor="movieName">Title</label>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;