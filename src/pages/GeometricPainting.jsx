
import Button from "react-bootstrap/Button"
import { useState, useEffect } from 'react';
import Square from "../components/Square";
import Circle from "../components/Circle";
import Moon from "../components/Moon";
import Triangle from "../components/Triangle";
import Star from "../components/Star";


const GeometricPainting = (props) => {

    let shapesArray = []

    for (let i = 0; i < 20; i++) {
        shapesArray.push(<Square />, <Circle />, <Moon />, <Triangle />, <Star />)
    }

    const shuffledArray = [...shapesArray].sort((a, b) => 0.5 - Math.random());

    const [shapes, setShapes] = useState(shuffledArray)



    const [width, setWidth] = useState(window.innerWidth * 0.9)
    const [height, setHeight] = useState(window.innerHeight * 0.7)


    const onWindowResize = () => {


        setWidth(window.innerWidth * 0.9)
        setHeight(window.innerHeight * 0.7)
    }

    window.addEventListener("resize", onWindowResize);

    return (
        <div className='divBody'>

            <div className='geoPuzzleDiv'>


                <div className="d-flex flex-row justify-content-between p-2" >
                    <div>

                        {shapes.map((shape) => {

                            return (

                                <div>
                                    {shape}

                                </div>

                            )

                        })}
                    </div>
                    <div>
                        <Button className="text-secondary" style={{backgroundColor: 'rgba(2,4,6,0.4)', borderColor:'black'}}  onClick={props.handleClick}><h6>Take Screenshot</h6> </Button>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center p-2" style={{ height: height, width: width, borderStyle: 'solid', marginTop: '10%', borderWidth: 5 , backgroundColor: 'rgba(2,4,6,0.4)'}}>

                    <h3 className="text-center text-secondary" >Drag and drop the shapes into this frame to generate your geometric painting.</h3>
                    <br></br>
                    <h3 className="text-center text-secondary">Use all shapes.</h3>
                    <br></br>
                    <h3 className="text-center text-secondary">Do not resize window while painting</h3>

                </div>

            </div>
        </div>
    )
}

export default GeometricPainting;