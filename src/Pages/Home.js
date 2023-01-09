import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";



const Home = () => {
    return(
        <>
           <Header />
           <Outlet/>
        </>
    )
}

export default Home;