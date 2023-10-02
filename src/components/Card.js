import react from "react"
import katie from "../katie-zaferes.png"
import star from "../star.png"
export default function Card(){
    return(
        <div>
            <img src={katie} />
            <img src={star} />
            <p>Life lessons with Katie Zaferes</p>
        </div>
    )
}