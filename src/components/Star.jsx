

import { Draggable } from 'drag-react';
import { Resizable } from "re-resizable";
import { useState, useRef } from 'react';
import useOutsideClick from './useOutsideClick';

function Star() {

    const [size, setSize] = useState({ width: window.innerHeight * 0.1, height: window.innerHeight * 0.1 });
    const [fill, setFill] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    const [borderStyle, setBorderStyle] = useState('none')

    const ref = useRef();

    useOutsideClick(ref, () => {
        setBorderStyle('none')
    });

    const HandleClick = (e) => {
        setBorderStyle('dotted')
    }

    const onWindowResize = () => {
        setSize({ width: window.innerHeight * 0.1, height: window.innerHeight * 0.1 })
    }

    window.addEventListener("resize", onWindowResize);

    return (
        <Draggable style={{ top: '5%', left: '5%' }}>
            <Resizable onClick={HandleClick}
                style={{ borderStyle: borderStyle }}
                size={{ width: size.width, height: size.height }}
                onResizeStop={(e, direction, ref, d) => {
                    setSize({
                        width: size.width + d.width, height: size.height + d.height,
                    });
                    setBorderStyle('none')
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size.width, height: size.height }} className="bi bi-star-fill" viewBox="0 0 16 16">
                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="black" />
                        <stop offset="100%" stop-color={fill} />
                    </linearGradient>
                    <path fill="url(#starGradient)" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            </Resizable>
        </Draggable>
    )
}

export default Star;