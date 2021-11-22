import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/cartFunctions";

export const productsContext = createContext();

const INIT_STATE = {
  products: [],
  currentProduct: {},
  cartLength: getCountProductsInCart(),
  cart: {},
  topicToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CURRENT_PRODUCT":
      return { ...state, currentProduct: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_TOPICS":
      return { ...state, topics: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [data, setData] = useState({});
  const [dataId, setDataId] = useState();

  const getProducts = async (params = "") => {
    const { data } = await axios(`https://shop-js-13.herokuapp.com/api/products?${params}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const getCurProduct = async (id) => {
    const { data } = await axios(`https://shop-js-13.herokuapp.com/api/products/${id}`);
    dispatch({
      type: "GET_CURRENT_PRODUCT",
      payload: data,
    });
  };

  async function addMainTopic(topic) {
    await axios.post("https://shop-js-13.herokuapp.com/api/products", topic);
    getTopics();
  }

  async function getTopics(params) {
    let { data } = await axios(`https://shop-js-13.herokuapp.com/api/products?${params}`);
    dispatch({
      type: "GET_TOPICS",
      payload: data,
    });
  }

  async function editTopicDetails(newTopic) {
    console.log(dataId);
    await axios.patch(`https://shop-js-13.herokuapp.com/api/products/${dataId}`, newTopic);
    getTopics();
  }

  function getData(newData, id) {
    setData(newData);
    setDataId(id);
  }

  async function handleDelete(id) {
    await axios.delete(`https://shop-js-13.herokuapp.com/api/products/${id}`);
    getProducts();
  }

  // Корзина

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0,
    };
    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        // products: state.topics,
        currentProduct: state.currentProduct,
        cartLength: state.cartLength,
        cart: state.cart,
        getProducts,
        getCurProduct,
        addProductToCart,
        getCart,
        changeProductCount,
        getTopics,
        addMainTopic,
        editTopicDetails,
        getData,
        data,
        handleDelete,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
