import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Review from '../../images/review1.jpg';
import './AddReview.css'

const AddReview = () => {
      const { user } = useAuth();
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            // console.log(data);
            axios.post('https://desolate-springs-66331.herokuapp.com/reviews', data)
                  .then(res => {
                        console.log(res);
                        if (res.data.insertedId) {
                              alert('Successfully Added Your Review');
                              reset();
                        }
                  })
      }

      return (
            <div className="container">
                  <div>
                        <div className="row">
                              <hr className="text-light mt-2" />
                              <div className="col-md-6">
                                    <div className="add__product ms">
                                          <h2 style={{fontFamily: 'poppins', fontSize: 13, fontWeight: 700, color: "#a5d6a7"}} className="fs-4 p-2 mt-4">Add Your Reviews</h2>
                                          <form onSubmit={handleSubmit(onSubmit)}>
                                                <input {...register("userName", { required: true, maxLength: 50 })} value={user.displayName} />
                                                <input type="date" {...register("date")} placeholder=" Date" required/>
                                                <textarea {...register("reviewDetails", {required:true})} placeholder="Your Review" />
                                                <button className="btn btn-success py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
                                          </form>
                                    </div>
                              </div>
                              <div className="col-md-6">
                                    <div>
                                          <img className="w-100" src={Review} alt="" />
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default AddReview;


