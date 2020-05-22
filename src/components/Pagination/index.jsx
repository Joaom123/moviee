import React, { Fragment } from "react";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "material-design-icons/iconfont/material-icons.css";

function Pagination({totalResults, page, handleChangeOfPage}) {
    const Pages = () => {
        const numberOfPages = Math.ceil(totalResults / 10);
        let pageElements = [];

        if (numberOfPages === page) {
            pageElements.push(
                <li className="waves-effect" key={1}>
                    <a href="#!" onClick={(e) => handleChangeOfPage(e, 1)}>1</a>
                </li>
            );
            pageElements.push(<span>...</span>);

            for (let i = page - 5; i <= page; i++)
                pageElements.push(
                    <li className={page === i ? "active" : "waves-effect"} key={i}>
                        <a href="#!" onClick={(e) => handleChangeOfPage(e, i)}>{i}</a>
                    </li>
                )


            return (
                <Fragment>
                    {pageElements}
                </Fragment>
            );
        }

        if (numberOfPages - page < 5) {
            for (let i = page; i <= numberOfPages; i++)
                pageElements.push(
                    <li className={page === i ? "active" : "waves-effect"} key={i}>
                        <a href="#!" onClick={(e) => handleChangeOfPage(e, i)}>i</a>
                    </li>
                )

            return (
                <Fragment>
                    {pageElements}
                </Fragment>
            );
        }

        if (page >= 5){
            for (let i = page - 4; i <= page; i++)
                pageElements.push(
                    <li className={page === i ? "active" : "waves-effect"}>
                        <a href="#!" onClick={(e) => handleChangeOfPage(e, i)}>{i}</a>
                    </li>
                )

            pageElements.push(<span>...</span>);
            pageElements.push(
                <li className="waves-effect" key={numberOfPages}>
                    <a href="#!" onClick={(e) => handleChangeOfPage(e, numberOfPages)}>{numberOfPages}</a>
                </li>
            );

            return (
                <Fragment>
                    {pageElements}
                </Fragment>
            );
        }

        for (let i = 1; i <= 5; i++)
            pageElements.push(
                <li className={page === i ? "active" : "waves-effect"} key={i}>
                    <a href="#!" onClick={(e) => handleChangeOfPage(e, i)}>{i}</a>
                </li>
            )

        pageElements.push(<span>...</span>);
        pageElements.push(
            <li className="waves-effect" key={numberOfPages}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, numberOfPages)}>{numberOfPages}</a>
            </li>
        );

        return (
            <Fragment>
                {pageElements}
            </Fragment>
        );
    }

    return (
        <ul className="pagination">
            <li className={page === 1 ? "disabled" : "waves-effect"}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, page - 1)}>
                    <i className="material-icons">chevron_left</i></a>
            </li>
            <Pages />
            <li className={page === Math.floor(totalResults / 10) ? "disabled" : "waves-effect"}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, page + 1)}>
                    <i className="material-icons">chevron_right</i></a>
            </li>
        </ul>
    );
}

export default Pagination;
