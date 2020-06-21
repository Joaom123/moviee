import React from "react";
import ModalContainer from "../ModalContainer";
import {getMoviePosterOrDefaultPoster} from "../../services";
import "./modalMovie.css";
import {trophyIcon, ratingIcon} from "../../assets";

export default function ModalMovie({movie, toggleModal, onCloseModal}) {
    return (
        <ModalContainer
            toggleModal={toggleModal}
            onCloseModal={onCloseModal}
            modalAdditionalClass="row modalMovie"
        >
            <MoviePoster movie={movie} />
            <MovieInfo movie={movie} />
        </ModalContainer>
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
    const {imdbRating, imdbVotes} = movie;

    if (movieHasNotRating(movie))
        return null;

    const ratingPercentagem = parseFloat(imdbRating)*10;

    return (
        <div className="col s6 movieRating">
            <img
                className="movieRating__icon"
                src={ratingIcon}
                alt="Rating icon"
            />
            <span>Rating</span>
            {/*<span className="modalMovie__votes">{`${imdbVotes} votes`}</span>*/}
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
            <span>Awards</span>
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