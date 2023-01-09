import React from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
    return(
        <>
            {window.innerWidth > 1100 ? <HeaderDesktop/> : <HeaderMobile/>}
        </>
    )
}

export default Header