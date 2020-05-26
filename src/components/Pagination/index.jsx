import React, { Fragment } from "react";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "material-design-icons/iconfont/material-icons.css";

function Pagination({totalResults, page, handleChangeOfPage}) {
    const PageLink = (number) => {
        return (
            <li className={page === number ? "active" : "waves-effect"} key={number}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, number)}>{number}</a>
            </li>
        )
    }

    const PagesLinks = () => {
        const numberOfPages = Math.ceil(totalResults / 10);
        let pageElements = [];

        if (numberOfPages <= 10) {
            for (let i = 1; i <= numberOfPages; i++)
                pageElements.push(PageLink(i));

            return (
                <Fragment>
                    {pageElements}
                </Fragment>
            );
        }

        if (numberOfPages === page) {
            pageElements.push(PageLink(1));
            pageElements.push(<span key={numberOfPages + 1}>...</span>);

            for (let i = page - 5; i <= page; i++)
                pageElements.push(PageLink(i));

            return (
                <Fragment>
                    {pageElements}
                </Fragment>
            );
        }

        if (numberOfPages - page < 5) {
            for (let i = page; i <= numberOfPages; i++)
                pageElements.push(PageLink(i));

            return (
                <Fragment>
                    {pageElements}
                </Fragment>
            );
        }

        if (page >= 5){
            for (let i = page - 3; i <= page + 1; i++)
                pageElements.push(PageLink(i));

            pageElements.push(<span key={numberOfPages + 1}>...</span>);
            pageElements.push(PageLink(numberOfPages));

            return (
                <Fragment>
                    {pageElements}
                </Fragment>
            );
        }

        for (let i = 1; i <= 5; i++)
            pageElements.push(PageLink(i));

        pageElements.push(<span key={numberOfPages + 1}>...</span>);
        pageElements.push(PageLink(numberOfPages));

        return (
            <Fragment>
                {pageElements}
            </Fragment>
        );
    }

    if(totalResults === 0)
        return null;

    return (
        <ul className="pagination">
            <li className={page === 1 ? "disabled" : "waves-effect"}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, page - 1)}>
                    <i className="material-icons">chevron_left</i></a>
            </li>
            <PagesLinks />
            <li className={page === Math.floor(totalResults / 10) ? "disabled" : "waves-effect"}>
                <a href="#!" onClick={(e) => handleChangeOfPage(e, page + 1)}>
                    <i className="material-icons">chevron_right</i></a>
            </li>
        </ul>
    );
}

export default Pagination;