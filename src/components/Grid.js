import react from "react"
import grid from "../images/photo-grid.png"
import "../../src/index.css"
export default function Grid(){
    return(
        <section className="section">
            <img className="grid" src={grid} />
            <h1 className="header">Online Experiences</h1>
            <p className="text">Join unique interactive activities led by
                one-of-a-kind hosts-all without leaving 
                home</p> 
        </section>
    )
}