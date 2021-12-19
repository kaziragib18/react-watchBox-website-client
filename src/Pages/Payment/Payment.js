import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pay from '../../images/undraw_paymentsvg.svg';

const Payment = () => {
      const { orderId } = useParams();
      const [orders, setOrders] = useState({});
      useEffect(() => {
            fetch(`http://localhost:5000/orders/${orderId}`)
                  .then(res => res.json())
                  .then(data => setOrders(data));
      }, [orderId])

      return (
            <div className="container">
                  <div>
                        <div className="row">
                              <hr className="text-light" />
                              <div className="col-md-6">
                                    <div className="add__product ms">
                                          <h2 style={{ fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#a5d6a7" }} className="fs-4 p-2 mt-4">Your Payment</h2>
                                          <hr />
                                          <h2 style={{ fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#a5d6a7" }} className="fs-4 p-2 mt-4 text-start">All Details:</h2>

                                          <h2 style={{ fontFamily: 'poppins', fontSize: 8, fontWeight: 500 }} className="fs-5 p-2 mt-4 text-start">Order Id: {orders._id}</h2>
                                          <h2 style={{ fontFamily: 'poppins', fontSize: 8, fontWeight: 500 }} className="fs-5 p-2 mt-4 text-start">Brand: {orders.brand}</h2>
                                          <h2 style={{ fontFamily: 'poppins', fontSize: 8, fontWeight: 500 }} className="fs-5 p-2 mt-4 text-start">Series: {orders.series}</h2>
                                          <h2 style={{ fontFamily: 'poppins', fontSize: 8, fontWeight: 500 }} className="fs-5 p-2 mt-4 text-start">Product Price: ${orders.price}</h2>

                                    </div>
                              </div>

                              <div className="col-md-6">
                                    <div>
                                          <img className="w-100 pt-5" src={Pay} alt="" />
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Payment;