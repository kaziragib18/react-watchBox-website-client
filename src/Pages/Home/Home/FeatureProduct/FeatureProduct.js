import React, { useEffect, useState } from 'react';
// import { CircularProgress } from '@mui/material';
// import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';


const FeatureProduct = () => {
      // const { isLoading } = useAuth();
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/products')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      })

      return (
            <div id="products" className="p-3">
                  <h2 className="text-success mt-4 fs-4">Check Out Our Latest Arrival</h2>
                  <hr className="dark"/>
                  {/* 
                  {isLoading && <CircularProgress />
                  } */}

                  <div className="product__div">
                        <div className="product__container">
                              {
                                    products.slice(0,6).map(product => <Product
                                          key={product.id}
                                          product={product}
                                    ></Product>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default FeatureProduct;