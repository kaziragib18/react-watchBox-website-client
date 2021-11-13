import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import './Products.css'

const Products = () => {
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('https://desolate-springs-66331.herokuapp.com/products')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, [])

      return (
            <div id="products" className="p-3">
                  <h2 style={{fontFamily: 'poppins', fontWeight:600, color:"#a5d6a7"}} className="mt-2 fs-4"> Explore All of Our Exclusive Watches</h2>
                  <h2 style={{fontFamily: 'poppins'}} className="text-dark fs-6 mt-3">With thousands of pre-owned luxury watches from the best brands around the world, we are dedicated to bringing collectors and enthusiasts an unrivaled selection of timepieces. Our in-house team of Swiss-trained watchmakers, technicians, and refinishers are highly skilled and have a passion for quality, authenticity, and craftsmanship—so you never have to worry about compromising value or provenance. Explore our expansive selection of authentic pre-owned watches from top brands like Rolex, Patek Philippe, Breitling, and Omega. Or, discover something new designed by an independent watchmaker—we have exactly what you’ve been searching for.</h2>
                  <hr className="text-dark" />

                  <div className="product__div">
                        <div className="product__container">
                              {
                                    products.map(product => <Product
                                          key={product.id}
                                          product={product}
                                    ></Product>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Products;