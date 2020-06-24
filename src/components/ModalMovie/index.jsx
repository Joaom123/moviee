import React, {Fragment} from "react";
import ModalContainer from "../ModalContainer";
import {getMoviePosterOrDefaultPoster} from "../../services";
import "./modalMovie.css";
import {trophyIcon} from "../../assets";

export default function ModalMovie({movie, toggleModal, onCloseModal}) {
    return (
        <ModalContainer
            toggleModal={toggleModal}
            onCloseModal={onCloseModal}
            modalAdditionalClass="row modalMovie"
        >
            <ModalContent movie={movie} />
        </ModalContainer>
    );
}

function ModalContent({movie}) {
    if(Object.keys(movie).length === 0)
        return null;

    return (
        <Fragment>
            <MoviePoster movie={movie} />
            <MovieInfo movie={movie} />
        </Fragment>
    );
}

function MoviePoster({movie}) {
    return (
        <div className="col s12 m5 modalMovie__poster">
            <img
                className="w-100 h-100"
                src={getMoviePosterOrDefaultPoster(movie)}
                alt="Movie poster"
            />
        </div>
    );
}

function MovieInfo({movie}) {
    return (
        <div className="col s12 m7 modalMovie__info">
            <MovieHeader movie={movie} />
            <MovieBody movie={movie} />
        </div>
    );
}

function MovieHeader({movie}) {
    const {Title, Genre} = movie;

    return (
        <div className="modalMovie__header">
            <h2 className="modalMovie__title">{Title}</h2>
            <div className="row modalMovie__genreAndBadges">
                <span className="col s12 l6 modalMovie__genre">{Genre}</span>
                <MovieBadges movie={movie} />
            </div>
            <hr />
            <div className="row modalMovie__ratingAndAwards">
                <MovieRating movie={movie} />
                <MovieAwards movie={movie} />
            </div>
        </div>
    );
}

function MovieBadges({movie}) {
    const {Year, Rated, Runtime} = movie;

    return (
        <div className="col s12 l6 modalMovie__badges">
            <BadgePill info={Year} />
            <BadgePill info={Rated} />
            <BadgePill info={Runtime} />
        </div>
    );
}

function BadgePill({info}) {
    if(info === "N/A")
        return null;
    return <span className="modalMovie__badgePill">{info}</span>;
}

const movieHasNotRating = (movie) => {
    const {imdbRating, imdbVotes} = movie;

    return imdbRating === "N/A" || imdbVotes === "N/A";
}

function MovieRating({movie}) {
    if (movieHasNotRating(movie))
        return null;

    const {imdbRating, imdbVotes} = movie;
    const ratingPercentage = parseFloat(imdbRating)/10;

    return (
        <div className="col s6 movieRating">
            <RatingIcon ratingPercentage={ratingPercentage}/>
            <span>{`${imdbRating}/10`}</span>

        </div>
    );
}

function MovieAwards({movie}) {
    const {Awards} = movie;
    const withoutAward = Awards === "N/A";
    const modifierWithoutAward = withoutAward ? "movieAwards__icon--withoutAward" : "";
    const numberOfColumns = movieHasNotRating(movie) ? "s12" : "s6";

    return (
        <div className={`col ${numberOfColumns} movieAwards`}>
                <img
                    className={`movieAwards__icon ${modifierWithoutAward}`}
                    src={trophyIcon}
                    alt="Trophy icon"
                />
                <span>{Awards}</span>
        </div>
    );
}

function MovieBody({movie}) {
    const {Plot} = movie;

    if(Plot === "N/A")
        return null;

    return (
        <div className="modalMovie__body">
            <p className="modalMovie__plot">{Plot}</p>
        </div>
    );
}

function RatingIcon({ratingPercentage}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            preserveAspectRatio="none"
            viewBox="0 0 530 500"
        >
            <defs>
                <linearGradient id="progress" x1="0" y1="1" x2="0" y2="0">
                    <stop id="stop1" offset={ratingPercentage} stopColor="red">
                        <animate attributeName="offset" values={`0; ${ratingPercentage}`} dur="1s"/>
                    </stop>
                    <stop id="stop2" offset={ratingPercentage} stopColor="pink">
                        <animate attributeName="offset" values={`0; ${ratingPercentage}`} dur="1s"/>
                    </stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#progress)"
                xmlns="http://www.w3.org/2000/svg"
                d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
            />
        </svg>
    );
}