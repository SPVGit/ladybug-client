
import { Draggable } from 'drag-react';
import { Resizable } from "re-resizable";
import { useState, useRef } from 'react';
import useOutsideClick from './useOutsideClick';

function Moon() {

    const [size, setSize] = useState({ width: window.innerHeight * 0.1, height: window.innerHeight * 0.1 });
    const [fill, setFill] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    const [borderStyle,setBorderStyle] = useState('none')

    const ref = useRef();

    useOutsideClick(ref, () => {
        setBorderStyle('none')
      });

    const HandleClick = (e) =>{
        setBorderStyle('dotted')
    }

    const onWindowResize = () => {
        setSize({ width: window.innerHeight * 0.1, height: window.innerHeight * 0.1 })
    }

    window.addEventListener("resize", onWindowResize);

    return (
        <Draggable style={{top:'5%', left:'5%'}}>
            <Resizable onClick={HandleClick}
             style={{borderStyle:borderStyle}}
                size={{ width: size.width, height: size.height }}
                onResizeStop={(e, direction, ref, d) => {
                    setSize({
                        width: size.width + d.width, height: size.height + d.height,
                    });
                    setBorderStyle('none')
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size.width, height: size.height}} className="bi bi-moon-fill" viewBox="0 0 16 16">
                <defs>
                        <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="black" />
                            <stop offset="100%" stop-color={fill} />
                        </linearGradient>
                    </defs>
                    <path fill="url(#moonGradient)"  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
            </Resizable>
        </Draggable>
    )
}

export default Moon;