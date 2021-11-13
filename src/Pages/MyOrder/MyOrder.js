import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar'
import './MyOrder.css'

const MyOrder = () => {
      const [orders, setOrders] = useState([]);
      const { user } = useAuth();

      useEffect(() => {
            fetch('http://localhost:5000/orders?email='+user.email)
                  .then(res => res.json())
                  .then(data => setOrders(data))
      }, []);

      const handleDelete = id => {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (id) {
                              alert('Your Order is Canceled!');
                              const remaining = orders.filter(order => order._id !== id);
                              setOrders(remaining);
                        }
                  })
      }

      return (
            <>
                  <Navbar></Navbar>
                  <div id="orders" className="p-3">
                        <h2 className="text-success mt-2 fs-3">Your Orders:</h2>
                        <hr className="text-dark" />
                        <div className="order__div">
                              <div className="order__container">
                                    {
                                          orders.map(order =>
                                                <div className="order__card pb-3" key={order._id}>

                                                      <h4 className="pt-3  fs-6 fw-bold">Name: {order.name}</h4>
                                                      <hr />

                                                      <h4 className="pt-1  fs-6 fw-bold">Email: {order.email}</h4>
                                                      <hr />

                                                      <h4 className="pt-1  fs-6 fw-bold">Brand: {order.brand}</h4>
                                                      <hr />

                                                      <h4 className="pt-1  fs-6 fw-bold">Series: {order.series}</h4>
                                                      <hr />

                                                      {/* <h4 className="pt-1  fs-6 fw-bold">Price: {order.price}</h4>
                                                      <hr /> */}

                                                      <h4 className="pt-1  fs-6 fw-bold">Order Id: {order._id}</h4>
                                                      <hr />

                                                      <h5 className="p-2 fs-6 fw-bold">Phone Number: {order.phone}</h5>
                                                      <hr />
                                                      <button onClick={() => handleDelete(order._id)} className="btn btn-danger">Cancel</button>
                                                </div>
                                          )
                                    }
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default MyOrder;
