import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import LandingPage from "./Pages/LandingPage";
const App=()=>{
  return(
       <BrowserRouter>
          <NavBar />
              <Routes>
                  <Route path="" element={<LandingPage />} />
                  <Route path="login" element={<Login/>}/>
                  <Route path="register" element={<Register/>}/>
                  <Route path="product" element={<Product/>}/>
                  <Route path="dashboard" element={<Dashboard/>}/>
                  <Route path="home" element={<Home/>}/>
                  
              </Routes>
       </BrowserRouter>
       )
}
export default App;
