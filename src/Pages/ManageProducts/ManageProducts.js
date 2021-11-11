import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
      const [products, setProducts] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/products')
                  .then(res => res.json())
                  .then(data => setProducts(data))
      }, []);

      const handleDelete = id => {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                       
                        if (id) {
                              alert('Products Permanently Deleted!');
                              const remaining = products.filter(product => product._id !== id);
                              setProducts(remaining);
                              
                        }
                        
                  })
      }

      return (
            <div id="products" className="p-3">
                  <h2 className="text-success mt-2 fs-3">Manage all products</h2>
                  <hr className="text-dark" />
                  <div className="product__div">
                        <div className="product__container">
                              {
                                    products.map(product => <div className="product__card pb-3">
                                          <img className="product__img" src={product.img} alt="" />
                                          <h4 className="pt-3 fs-6 fw-bold">{product.name}</h4>
                                          <hr />
                                          <h4 className="pt-1  fs-6 fw-bold">{product.info}</h4>
                                          <hr />
                                          <h5 className="p-2 fs-6">{product.description}</h5>
                                          <button onClick={() =>handleDelete(product._id)} className="btn btn-danger">Delete</button>

                                    </div>

                                    )
                              }
                        </div>
                  </div>
            </div>
      );
};

export default ManageProducts;