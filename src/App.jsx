
import { Outlet } from "react-router-dom";
import './App.css';
import NavItem from "./components/NavItem";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
    <NavItem/>
    <div className="min-vh-100">
    <Outlet/>
    </div>
     
     <Footer/>
    </>
  );
}

export default App
