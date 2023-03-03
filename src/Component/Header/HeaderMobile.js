import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import NavigationStrings from "../../Constant/NavigationStrings";
import "../Header/Header.css"

const HeaderMobile = () => {

  const [showMenu, setShowMenu] = useState(false);


  const popupMenu = () => {
    setShowMenu(!showMenu);  
  }

  return(
    <>
    
      <div className={showMenu ? "mobile-menu-sec menuSlideUp" : "mobile-menu-sec" }>
        <NavLink to="/"> <i className='bx bx-home'></i><br/>Home </NavLink>
        <NavLink to={NavigationStrings.ABOUT_ME}> <i className='bx bx-user'></i> <br/>About </NavLink>
        <NavLink to="skills"><i className='bx bx-code-alt' ></i> <br/>Skills</NavLink>
        <NavLink to="services"><i className='bx bx-briefcase-alt-2' ></i> <br/>Services</NavLink>
        <NavLink to={NavigationStrings.PORTFOLIO}><i className='bx bx-image' ></i> <br/>Portfolio</NavLink>
        <NavLink to={NavigationStrings.CONTACT}><i className='bx bx-envelope' ></i> <br/>Contact</NavLink>
      </div>
 
      

        <div className="mobile-menu-hemburger">
        <div className="mobile-menu-inner">
          <NavLink className="mobile-logo" to="/"> Mohit </NavLink>
          <i onClick={popupMenu} className={showMenu ? "fa fa-times" : "fa fa-th-large"} aria-hidden="true"></i>  
          </div>
        </div>
    </>
  )
}

export default HeaderMobile