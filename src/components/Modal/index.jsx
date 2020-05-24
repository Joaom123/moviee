import React from "react";
import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

const Modal = ({movie}) =>
        <div id={movie.imdbID} className="modal">
            <div className="modal-content">
                <h4>{movie.Title}</h4>
                <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>

export default Modal;