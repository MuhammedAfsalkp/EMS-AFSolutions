import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return ( 
    <div className="App">
      
     <BrowserRouter>
     <Navbar></Navbar>
        <Routes>
             <Route path='/' element={<Home></Home>}></Route>
            <Route path='/auth' element={<Login></Login>}></Route>
       </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
