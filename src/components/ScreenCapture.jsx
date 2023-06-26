
import html2canvas from "html2canvas";
import GeometricPainting from "../pages/GeometricPainting";
import { useRef, useState } from "react";

const ScreenCapture =  ({children}) => {

  const ref = useRef()


  const [width, setWidth] = useState(window.innerWidth )
    const [height, setHeight] = useState(window.innerHeight )


    const onWindowResize = () => {


        setWidth(window.innerWidth )
        setHeight(window.innerHeight)
    }

    window.addEventListener("resize", onWindowResize);
  

  const handleClickTakeScreenShot = () => {
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: width,
      cropHeigth: height
    };

    html2canvas(ref.current).then(canvas => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeigth;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop, cropWidth,cropHeigth);

      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "receipt.png";
      a.click();
    });
  };


    return (
      <div>
        {children}
       
        <div
          id="#screenshot"
          ref={ref}
        >
          <GeometricPainting  handleClick = {handleClickTakeScreenShot}/>
          
        </div>
        
      </div>
    );
  }

export default ScreenCapture

// <button onClick={handleClickTakeScreenShot}>Download</button>