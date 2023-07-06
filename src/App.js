
import BugOnWall from "./pages/BugOnWall";
import BugDragAndDrop from "./pages/BugDragAndDrop";
import { Route, Routes } from "react-router-dom"


function App() {


  return (
    <div className="App">
      <Routes>

       
        <Route path='/bugonwall' element ={<BugOnWall />}/>
          
        <Route path='/bugdraganddrop' element = {<BugDragAndDrop />}/>


      </Routes>


    </div>
  );
}

export default App;
