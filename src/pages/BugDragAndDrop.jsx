
import { useState } from "react";

function BugDragAndDrop() {


    const array = ['row-1-column-1', 'row-1-column-2', 'row-1-column-3', 'row-1-column-4', 'row-1-column-5',
        'row-2-column-1', 'row-2-column-2', 'row-2-column-3', 'row-2-column-4', 'row-2-column-5',
        'row-3-column-1', 'row-3-column-2', 'row-3-column-3', 'row-3-column-4', 'row-3-column-5',
        'row-4-column-1', 'row-4-column-2', 'row-4-column-3', 'row-4-column-4', 'row-4-column-5',
        'row-5-column-1', 'row-5-column-2', 'row-5-column-3', 'row-5-column-4', 'row-5-column-5'];


    const shuffledArray = [...array].sort((a, b) => 0.5 - Math.random());

    const [images, setImages] = useState(shuffledArray)

   

    return (
        <div className='divBody'>
        
            <div className='puzzleDiv'>

                

                <div className="d-flex flex-wrap justify-content-center">

                    {images.map((image) => {

                        return (
                         
                            <img  src={`./${image}.jpg`} className='box1'/>
                      
                        )

                    })}
                </div>

                <div className="d-flex flex-wrap justify-content-center">

                    {array.map((classname) => {

                        return (

                            <div key={`${classname}`} className='box2' ></div>

                        )

                    })}
                </div>
                
            </div>

        </div>
    )
}

export default BugDragAndDrop;