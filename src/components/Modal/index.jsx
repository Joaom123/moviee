import React, { Component, } from "react";
import M from "materialize-css";

import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

class Modal extends Component {
    componentDidMount() {
        const options = {
            inDuration: 300,
            outDuration: 300,
            opacity: 0.4,
            dismissible: true,
            startingTop: "10%",
            endingTop: "10%"
        };

        M.Modal.init(this.Modal, options);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.toggleModal === true)
            M.Modal.getInstance(this.Modal).open();
    }

    render() {
        return (
            <div
                ref={ Modal => { this.Modal = Modal; } }
                id="modal"
                className="modal"
            >
                <div className="modal-content">{this.props.children}</div>
            </div>
        );
    }
}

export default Modal;
