import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Portfolio = () => {
    return (
        <>
            <h5>Portfolio</h5>
            <Outlet/>
        </>
    )
}

export default Portfolio;