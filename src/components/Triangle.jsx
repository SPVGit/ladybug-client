
import { Draggable } from 'drag-react';
import { Resizable } from "re-resizable";
import { useState, useRef } from 'react';
import useOutsideClick from './useOutsideClick';

function Triangle() {

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
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: size.width, height: size.height }} className="bi bi-triangle-fill" viewBox="0 0 16 16">
                <linearGradient id="triGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="rgb(0,0,0)" />
                        <stop offset="100%" stop-color={fill} />
                    </linearGradient>
                    <path fill="url(#triGradient)" fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                </svg>
            </Resizable>
        </Draggable>
    )
}

export default Triangle;