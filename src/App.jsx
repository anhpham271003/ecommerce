
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import ProductsList from "./Pages/ProductsList";
import Footer from "./components/Footer";


function App() {

  return (
    <>
        <BrowserRouter>
            <Header /> 
            <Routes>
                <Route path = {"/"} element = {<Home/>}/> 
                <Route path = {"/productsList/"} element = {<ProductsList/>}/> 
            </Routes> 
            <Footer/>
         </BrowserRouter>

    </>
  )
}

export default App
