
import { Draggable } from 'drag-react';
import { Resizable } from "re-resizable";
import { useState, useRef } from 'react';
import useOutsideClick from './useOutsideClick';

function Square () {

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
   
    return(
        <Draggable style={{top:'5%', left:'5%'}}>
                <Resizable onClick={HandleClick}
                 style={{borderStyle:borderStyle}}
                    size={{ width: size.width, height: size.height}}
                    onResizeStop={(e, direction, ref, d) => {
                        setSize({
                            width: size.width + d.width, height: size.height + d.height,
                        });
                        setBorderStyle('none')
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size.width, height: size.height }}  className="bi bi-square-fill shape1" viewBox="0 0 16 16">
                    <defs>
                        <linearGradient id="sqGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="black" />
                            <stop offset="100%" stop-color={fill} />
                        </linearGradient>
                    </defs>
                        <path fill="url(#sqGradient)"  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                    </svg>
                </Resizable>
            </Draggable>
    )
}

export default Square;