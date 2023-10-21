import React from "react"
import logo from "../images/Airbnb-logo.png"
import "../../src/index.css"
export default function Navbar(){
    return(
        <nav>
            <img className="nav-logo" src={logo} />
        </nav>
    )
}