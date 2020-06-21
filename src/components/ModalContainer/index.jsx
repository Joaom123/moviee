import React, { Component, } from "react";
import M from "materialize-css";
import "./modal.css";

class ModalContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        }

        this.onMouseMoveHandle = this.onMouseMoveHandle.bind(this);
        this.onMouseOutHandle = this.onMouseOutHandle.bind(this);
        this.ref = Modal => {this.Modal = Modal;};
    }

    componentDidMount() {
        const options = {
            onCloseStart: this.props.onCloseModal,
            inDuration: 300,
            outDuration: 300,
            opacity: 0.4,
            dismissible: true,
            preventScrolling: false,
            startingTop: "5%",
            // endingTop: "25%"
        };

        M.Modal.init(this.Modal, options);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.toggleModal === true)
            M.Modal.getInstance(this.Modal).open();
    }

    onMouseMoveHandle (event) {
        const modalRect = this.Modal.getBoundingClientRect();

        const centerX = modalRect.width/2 + modalRect.x;
        const centerY = modalRect.height/2 + modalRect.y

        let x = (event.clientX - centerX)*0.125/centerX;
        let y = -(event.clientY - centerY)*0.125/centerY;

        this.setState({x, y});
    }

    onMouseOutHandle () {
        this.setState({
            x: 0,
            y: 0
        });
    }

    style (x, y) {
        return {
            transform: `perspective(300px) rotateY(${x}deg) rotateX(${y}deg)`,
            transition: x === 0 && y === 0 ? "transform 1s" : "inherit"
        };
    }

    render() {
        const {x, y} = this.state;
        const {modalAdditionalClass = "", children} = this.props;

        return (
            <div
                ref={this.ref}
                id="modal"
                className={`modal ${modalAdditionalClass}`}
                onMouseMove={this.onMouseMoveHandle}
                onMouseOut={this.onMouseOutHandle}
                style={this.style(x, y)}
            >
                {children}
            </div>
        );
    }
}

export default ModalContainer;
