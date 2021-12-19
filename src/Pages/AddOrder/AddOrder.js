import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddOrder.css';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';

const AddOrder = () => {
      const { user } = useAuth();
      const { id } = useParams();
      const [product, setProduct] = useState([]);

      useEffect(() => {
            fetch(`https://desolate-springs-66331.herokuapp.com/products/${id}`)
                  .then(res => res.json())
                  .then(data => setProduct(data))
      }, [id])

      const { register, handleSubmit, reset } = useForm();
      let history = useHistory();

      const onSubmit = data => {
            // console.log(data);
            axios.post('https://desolate-springs-66331.herokuapp.com/orders', data)
                  .then(res => {
                        // console.log(res);
                        if (res.data.insertedId) {
                              alert('Successfully Added');
                              history.push("/dashboard/myOrder");
                              reset();
                        }
                  })
      }

      return (
            <>
                  <Navbar></Navbar>
                  <div className="add__order">
                        <h2 style={{ fontFamily: 'poppins', fontWeight: 600, color: "#a5d6a7" }} className="fs-3  mt-4 pb-2">For Purchasing Please Fill up the Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <input type="name" {...register("name", { maxLength: 20 })} value={user.displayName} />
                              <input type="email" {...register("email", { maxLength: 30 })} value={user.email} />
                              <input type="number" {...register("phone")} placeholder="Phone Number" required />
                              <textarea {...register("address")} placeholder="Enter your address" required />
                              <input {...register("brand", { required: true })} value={product.brand} />
                              <input type="text" {...register("series", { required: true })} value={product.series} />
                              <input {...register("price", { required: true })} value={product.price} />
                              <button className="btn btn-success py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
                        </form>
                  </div>
            </>
      );
};

export default AddOrder;