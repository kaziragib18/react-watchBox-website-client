import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
      const [reviews, setReviews] = useState([])
      useEffect(() => {
            fetch('https://desolate-springs-66331.herokuapp.com/reviews')
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        setReviews(data)
                  })
      }, [])

      return (
            <div id="products" className="p-3">
                  <h2 style={{fontFamily: 'poppins', fontWeight:600, color:"#a5d6a7"}} className=" mt-2 fs-4 ">What Our Clients Say About Us</h2>
                  <hr className="text-dark"/>

                  <div className="product__div">
                        <div className="product__container">
                              {
                                    reviews.map(review => <Review
                                          key={review.id}
                                          review={review}
                                    ></Review>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Reviews;