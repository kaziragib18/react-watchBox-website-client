import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data);
            axios.post('https://desolate-springs-66331.herokuapp.com/products', data)
                  .then(res => {
                        console.log(res);
                        if (res.data.insertedId) {
                              alert('Successfully Added');
                              reset();
                        }
                  })
      }

      return (
            <div className="add__product">
                  <h2 style={{fontFamily: 'poppins', fontSize: 20, fontWeight: 700, color: "#a5d6a7"}} className="fs-4 p-3 mt-0">Add New Products</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("brand", { required: true, maxLength: 50 })} placeholder="Brand" />
                        <input  {...register("series", { required: true, maxLength: 50 })} placeholder="Series" />
                        <textarea {...register("description")} placeholder="Description" />
                        <input type="number" {...register("price")} placeholder="Price"  />
                        <input {...register("img")} placeholder="Image url" required />
                        <button className="btn btn-success py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
                  </form>
            </div>
      );
};

export default AddProduct;