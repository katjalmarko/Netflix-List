import "./OneMovieSlider.css"
import data from "../data"
import { useState } from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
 
const OneMovieSlider = () => {
    const [index, setIndex] = useState(0)
    const {image, title, description} = data[index]
 
    return <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button>
            <FaArrowAltCircleLeft />
        </button>
        <button>
            <FaArrowAltCircleRight />
        </button>
 
    </div>
}
 
export default OneMovieSlider