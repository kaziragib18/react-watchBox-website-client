import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data);
            axios.post('http://localhost:5000/products', data)
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
                  <h2 className="text-info p-3 mt-5">Add New Products</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("brand", { required: true, maxLength: 50 })} placeholder="Brand" />
                        <input  {...register("series", { required: true, maxLength: 50 })} placeholder="Series" />
                        <textarea {...register("description")} placeholder="Description" />
                        <input type="number" {...register("price")} placeholder="Price"  />
                        <input {...register("img")} placeholder="Image url" required />
                        <button className="btn btn-primary py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
                  </form>
            </div>
      );
};

export default AddProduct;