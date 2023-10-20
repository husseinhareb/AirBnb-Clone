import react from "react"
import katie from "../katie-zaferes.png"
import star from "../star.png"
import "../../src/index.css"

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
         <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}