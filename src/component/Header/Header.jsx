import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../images/logo.png"
import {FaUserAlt} from "react-icons/fa";
function Header() {
    return (
        <ReactNavbar
     navColor1="white"
     navColor2="hsla(280, 100%, 14%, 1)"
     burgerColor="hsl(250,100%,75%)"
     burgerColorHover="hsl(250,100%,75%)"
     logo={logo}
     logoWidth="200px"
     logoHoverColor="hsl(250,100%,75%)"
     nav3justifyContent="space-around"
     nav2justifyContent="space-around"
     link1Text="Home"
     link2Text="About"
     link3Text="Projects"
     link4Text="Contact"
     link1Url="/"
     link2Url="/About"
     link3Url="/Projects"
     link4Url="/Contact"
     link1ColorHover="white"
     link1Color="HSL(250,100%,75%)"
     link1Size="1,6rem"
     link1Padding="3vmax"
 

/>


      
    )
}

export default Header;
