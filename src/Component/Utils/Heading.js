import React from "react";
import "../../App.css"

const Heading = (props) => {
    return(
        <>
            <h3 className="cstm_heading">{props.heading}</h3>
        </>
    )
}

export default Heading