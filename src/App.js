
import './App.css';
import {BrowserRouter as Routers, Route,Routes} from "react-router-dom"
import Home from './component/Home/Home'
import Header from "./component/Header/Header"
function App() {
  return (
  <Routers>
    <Header/>
  <Routes>


    <Route path="/" element={<Home/>}/>
    

   
  </Routes>


  </Routers>
  );
}

export default App;
