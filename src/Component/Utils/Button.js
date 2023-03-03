import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStrings from "../../Constant/NavigationStrings"

const ActionButton = (props) => {
    return(
        <>
            <NavLink className={props.buttonHover} to={props.linkUrl}> {props.buttonName} <i className={props.iconName} ></i></NavLink>
        </>
    )
}

export default ActionButton