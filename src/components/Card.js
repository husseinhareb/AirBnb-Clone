import React from "react"
import "../../src/index.css"

export default function Card(props){
    return(
        <div className="card">
         <img src={`../../public/images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../../public/images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}