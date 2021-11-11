import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddOrder.css';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const AddOrder = () => {
      const { id } = useParams();
      const [product, setProduct] = useState([]);

      useEffect(() => {
            fetch(`http://localhost:5000/products/${id}`)
                  .then(res => res.json())
                  .then(data => setProduct(data))
      })

      const { register, handleSubmit, reset } = useForm();

      const onSubmit = data => {
            console.log(data);
            axios.post('http://localhost:5000/orders', data)
                  .then(res => {
                        console.log(res);
                        if (res.data.insertedId) {
                              alert('Successfully Added');
                              // history.push("/myOrder");
                              reset();
                        }
                  })
      }

      return (
            <>
                  <Navbar></Navbar>
                  <div className="add__order">
                        <h2 className="text-success fs-3  mt-4 pb-2">For Purchasing Please Fill up the Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <input type="text" {...register("name", { maxLength: 20 })} />
                              <input type="email" {...register("email", { maxLength: 30 })} />
                              <input {...register("phone")} placeholder="Phone Number" required />
                              <input {...register("price")} placeholder="Price" required />
                              <textarea {...register("address")} placeholder="Enter your address" required />
                              <input {...register("description")} value={product.name} />
                              <input {...register("info")} value={product.info} />
                              <button className="btn btn-success py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
                        </form>
                  </div>
            </>
      );
};

export default AddOrder;