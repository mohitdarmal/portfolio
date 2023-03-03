import React from "react";
import { NavLink } from "react-router-dom";

const SocialMedia = () => {
    return(
        <>
            <NavLink to={{pathname:"https://github.com/mohitdarmal"}} target={"_blank"}> <i className='bx bxl-github' ></i> </NavLink> 
            <NavLink to="#"> <i className='bx bxl-instagram' ></i> </NavLink>
            <NavLink to="#"> <i className='bx bxl-linkedin'></i> </NavLink>
        </>
    )
}

export default SocialMedia