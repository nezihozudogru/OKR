import React, { useReducer, useEffect } from "react";
import "../App.css";
import Product from "./Product";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../reducer/İndex";
import axios from "axios";

const PRODUCT_API_URL = "https://cimri-backend-service.herokuapp.com/data";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(PRODUCT_API_URL).then((jsonResponse) => {
      console.log(jsonResponse.data);
      dispatch({
        type: "SEARCH_PRODUCT_SUCCESS",
        payload: jsonResponse.data
      });
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_PRODUCT_REQUEST"
    });

    axios.get(PRODUCT_API_URL).then((jsonResponse) => {
      dispatch({
        type: "SEARCH_PRODUCT_SUCCESS",
        payload: jsonResponse.data.filter(
          (x) => x.products.name.toLowerCase() === searchValue.toLowerCase()
        )
      });
    });
  };

  const { Products, errorMessage, loading } = state;

  const retrievedProduct =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      Products.map((product, index) => (
        <Product key={`${index}-${product.products.id}`} product={product} />
      ))
    );

  return (
    <div className="App">
      <div className="m-container">
        <Search search={search} />

        <div className="products">{retrievedProduct}</div>
      </div>
    </div>
  );
};

export default App;
