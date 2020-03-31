import React from "react";

const Button = (props) => {

    function handleOnClick (event) {
        event.persist();
        props.onClick(event);
    }

    return(
        <button onClick={ event => handleOnClick(event)}>
            Próxima página
        </button>
    );
};

export default Button;