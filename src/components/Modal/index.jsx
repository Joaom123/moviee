import React, { Component, } from "react";
import M from "materialize-css";

import "../../style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }

        this.onMouseMoveHandle = this.onMouseMoveHandle.bind(this);
        this.ref = Modal => { this.Modal = Modal; };
    }

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

    onMouseMoveHandle (event) {
        this.setState({x: event.clientX, y: event.clientY});
        console.log(this.Modal.getBoundingClientRect());
    }

    render() {
        const {x, y} = this.state;

        return (
            <div
                ref={this.ref}
                id="modal"
                className="modal modal--animation"
                onMouseMove={this.onMouseMoveHandle}
                style={{
                    transform: `rotateY(${x}deg) rotateX(${y}deg)`
                }}
            >
                <div className="modal-content">{this.props.children}</div>
            </div>
        );
    }
}

export default Modal;
