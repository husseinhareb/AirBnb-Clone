import react from "react"
import katie from "../katie-zaferes.png"
import star from "../star.png"
import "../../src/index.css"

export default function Card(){
    return(
        <div className="card">
            <img className="katie" src={katie} />
            <img className="star" src={star} />
            <p className="rating"> 5.0 (6).USA</p>
            <p className="description">Life lessons with Katie Zaferes</p>
        </div>
    )
}