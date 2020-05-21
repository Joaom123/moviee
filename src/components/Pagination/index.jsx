import React from "react";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "material-design-icons/iconfont/material-icons.css";

function Pagination({totalResults, page, handleChangeOfPage}) {
    return (
        <ul className="pagination">
            <li className={page === 1 ? "disabled" : "waves-effect"}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, page - 1)}>
                    <i className="material-icons">chevron_left</i></a>
            </li>

            for
            <li className="active"><a href="#!">1</a></li>
            <li className="waves-effect"><a href="#!">2</a></li>

            <li className={page === Math.floor(totalResults / 10) ? "disabled" : "waves-effect"}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, page + 1)}>
                    <i className="material-icons">chevron_right</i></a>
            </li>
        </ul>
    );
}

export default Pagination;