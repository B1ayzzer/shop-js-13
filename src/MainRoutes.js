import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import AuthContextProvider from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/ProductContext";
import Auth from "./components/Auth/Auth";
import EditTopic from "./components/EditTopic/EditTopic";
import AddTopic from "./components/AddTopic/AddTopic";
// import Carousel1 from "./components/Carousel/Carousel";
const MainRoutes = () => {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTopic />} />

            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/edit/:id" element={<EditTopic />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
};

export default MainRoutes;
