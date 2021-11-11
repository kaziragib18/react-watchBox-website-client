import React, { useState, useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar'

const MyOrder = () => {
      const [orders, setOrders] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/orders')
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
                  <div className="d-flex justify-content-center flex-column justify-content-center ">
                        <h2 className="text-info p-3">Your Orders:</h2>
                        {
                              orders.map(order => <div className=" text-dark p-4 border m-2"
                                    key={order._id}>
                                    <h5 className="fs-5">Name: {order.name}</h5>
                                    <h3  className="fs-5">Email: {order.email}</h3>
                                    <h3  className="fs-5">Phone Number: {order.phone}</h3>
                                    <h3  className="fs-5">Address: {order.address}</h3>
                                    <h3  className="fs-5">Product: {order.description} - {order.info}</h3>

                                    <button onClick={() =>handleDelete(order._id)} className="btn btn-danger">Cancel</button>
                              </div>)
                        }
                  </div>
            </>
      );
};

export default MyOrder;