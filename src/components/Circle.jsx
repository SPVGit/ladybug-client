
import { Draggable } from 'drag-react';
import { Resizable } from "re-resizable";
import { useState, useRef } from 'react';
import useOutsideClick from './useOutsideClick';

function Circle() {

    const [size, setSize] = useState({ width: window.innerHeight * 0.1, height: window.innerHeight * 0.1 });
    const [fill, setFill] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    const [borderStyle, setBorderStyle] = useState('none')

    const ref = useRef();

    useOutsideClick(ref, () => {
        setBorderStyle('none')
    });

    const HandleClick = () => {
        setBorderStyle('dotted')
    }

    const onWindowResize = () => {
        setSize({ width: window.innerHeight * 0.1, height: window.innerHeight * 0.1 })
    }

    window.addEventListener("resize", onWindowResize);


    return (
        <Draggable style={{ top: '5%', left: '5%' }}  >
            <Resizable onClick={HandleClick}
                style={{ borderStyle: borderStyle }}
                size={{ width: size.width, height: size.height }}
                onResizeStop={(e, direction, ref, d) => {
                    setSize({
                        width: size.width + d.width, height: size.height + d.height,
                    });
                    setBorderStyle('none')
                }}>

                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size.width, height: size.height }} className="bi bi-circle-fill shape2" viewBox="0 0 16 16">

                    <defs>
                        <linearGradient id="cirGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="black" />
                            <stop offset="100%" stop-color={fill} />
                        </linearGradient>
                    </defs>

                    <circle cx="8" cy="8" r="8" fill="url(#cirGradient)" />
                </svg>
            </Resizable>
        </Draggable>
    )
}

export default Circle;