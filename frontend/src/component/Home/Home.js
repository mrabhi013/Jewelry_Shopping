import React, { Fragment, useEffect} from 'react';
import "./Home.css"
import ProductCard from "./ProductCard.js"
import MetaData from '../layout/MetaData';
import {getProduct, clearErrors} from "../../actions/productAction";
import { useSelector, useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,products} = useSelector(  (state) => state.products);

  useEffect(() =>{
    
    if(error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  },[dispatch,error,alert]);

    return (
      <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Jewelry" />

          <div className="banner">
            <h1>Welcome to Jewelry</h1>

            <a href="#container">
              <button>
                Buy Now
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
    );
};

export default Home;
