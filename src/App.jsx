import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductsList from "./Pages/ProductsList";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./components/Footer";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { createContext, useState } from "react";
import ProductZoom from "./components/ProductZoom";
import ProductDetailComponent from "./components/ProductDetailComponent";
import { FaWindowClose } from "react-icons/fa";

const myContext = createContext();

function App() {
  const [openProductModal, setOpenProductModal] = useState(true);

  const handleClickOpen = () => {
    setOpenProductModal(true);
  };

  const handleClose = () => {
    setOpenProductModal(false);
  };

  const values = {};

  return (
    <>
      <BrowserRouter>
        <myContext.Provider values={values}>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/productsList/"} element={<ProductsList />} />
            <Route path={"/productDetail/"} element={<ProductDetail />} />
          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductModal}
        onClose={handleClose}
        fullWidth={"lg"}
        maxWidth={"lg"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productModal"
      >
        <DialogContent>
          <div className=" relative flex items-center !w-full productModalContent">
            <Button
              className="!absolute top-1 right-1 !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-gray-700 hover:!text-red-500 text-2xl transition duration-300"
              onClick={handleClose}
            >
              <FaWindowClose className="!text-[20px]" />
            </Button>
            <div className="!w-[40%] !m-0">
              <ProductZoom />
            </div>
            <div className="!w-[60%] !m-0">
              <ProductDetailComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
