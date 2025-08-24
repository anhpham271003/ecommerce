
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import ProductsList from "./Pages/ProductsList";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./components/Footer";


function App() {

  return (
    <>
        <BrowserRouter>
            <Header /> 
            <Routes>
                <Route path = {"/"} element = {<Home/>}/> 
                <Route path = {"/productsList/"} element = {<ProductsList/>}/> 
                <Route path = {"/productDetail/"} element = {<ProductDetail/>}/> 
            </Routes> 
            <Footer/>
         </BrowserRouter>

    </>
  )
}

export default App
