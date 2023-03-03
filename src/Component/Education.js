import React from "react";
import "../Pages/Home/Home.css"

const Education = (props) => {
    return(
        <div className="education_sec pt-3">
            <div className="education_detail">
                <h5>{props.school}</h5>
                <p className="mb-2">{props.board}</p>
                <small><i className="uil uil-calendar-alt"></i> {props.year}</small>
            </div>   

            <div>
                <span className="education_circle"></span>
                <span className="education_line"></span>
            </div>  
        </div>
    )
}

export default Education