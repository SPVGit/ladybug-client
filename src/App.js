
import BugOnWall from "./pages/BugOnWall";
import BugInSun from "./pages/BugInSun";
import BugDragAndDrop from "./pages/BugDragAndDrop";
import GeometricPainting from "./pages/GeometricPainting";
import { Route, Routes } from "react-router-dom"
import ScreenCapture from "./components/ScreenCapture";

function App() {


  return (
    <div className="App">
      <Routes>

       
        <Route path='/bugonwall' element ={<BugOnWall />}/>
          
      
        <Route path='/buginsun' element = {<BugInSun />}/>
          
        <Route path='/bugdraganddrop' element = {<BugDragAndDrop />}/>

        <Route path='/geometricpainting' element = { <ScreenCapture/>}/>

      </Routes>


    </div>
  );
}

export default App;
