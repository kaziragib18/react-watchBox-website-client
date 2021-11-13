import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
      const { _id, brand, series, img, price, description } = product;
      return ( 
            <div className="product__card pb-3">
                  <img className="product__img" src={img} alt="" />
                  <h4 className="pt-3  fs-6 fw-bold">{brand}</h4>
                  <hr />
                  <h4 className="pt-1  fs-6 fw-bold">{series}</h4>
                  <hr />
                  <h5 className="p-2 fs-6">{description}</h5>
                  <hr />
                  <h4 className="pt-1  fs-6 fw-bold">${price}</h4>
                  <hr />
                  <Link to={`/addOrder/${_id}`}>
                        <button className="btn btn-dark border rounded-pill px-4">Purchase</button>
                  </Link>
            </div>
      );
};

export default Product;