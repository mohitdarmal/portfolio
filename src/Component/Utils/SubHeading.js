import React from "react";
import "../../App.css"

const SubHeading = (props) => {
    return(
        <>
            <h3 className="cstm_subheading">{props.subHeading}</h3>
        </>
    )
}

export default SubHeading