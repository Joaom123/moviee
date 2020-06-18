import React from "react";
import Modal from "../Modal";
import "./modalMovie.css"
import {getMoviePosterOrDefaultPoster} from "../../services";

export default function ModalMovie({movie, toggleModal, onCloseModal}) {
    return (
        <Modal
            toggleModal={toggleModal}
            onCloseModal={onCloseModal}
            modalAdditionalClass="row modalMovie"
        >
            <MoviePoster movie={movie} />
            <MovieInfo movie={movie} />
        </Modal>
    );
}

function MoviePoster({movie}) {
    return (
        <div className="col s12 m5 modalMovie__poster">
            <img
                className="w-100 h-100"
                src={getMoviePosterOrDefaultPoster(movie)}
                alt="Poster do filme"
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
            <span className="modalMovie__badgePill">{Year}</span>
            <span className="modalMovie__badgePill">{Rated}</span>
            <span className="modalMovie__badgePill">{Runtime}</span>
        </div>
    );
}

function MovieRating({movie}) {
    const {imdbRating, imdbVotes} = movie;

    const ratingPercentagem = parseFloat(imdbRating)*10;

    return (
        <div className="modalMovie__rating">
            <span>{imdbRating}</span>
            <span className="modalMovie__votes">{imdbVotes}</span>
        </div>
    );
}

function MovieAwards({movie}) {
    const {Awards} = movie;

    const hasAward = Awards !== "N/A";

    //TODO: Se tiver, exibe trofeu coloriodo com popover, se não,

    return (
        <div className="modalMovie__rating">
            <span>{Awards}</span>
        </div>
    );
}

function MovieBody({movie}) {
    const {Plot} = movie;

    return (
        <div className="modalMovie__body">
            <p className="modalMovie__plot">{Plot}</p>
        </div>
    );
}