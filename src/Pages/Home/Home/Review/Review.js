import React from 'react';
import user from '../../../../images/userIcon.png'

const Review = ({ review }) => {
      const { userName, date, reviewDetails } = review;
      return (
            <div className="review__card pb-3">
                  <h4 style={{fontFamily: 'poppins'}} className="pt-3  fs-6 fw-bold text-success"><img style={{width:'10%',marginBottom:10}} src={user} alt="" /> {userName} <span style={{color:"gray", marginLeft:10}}>{date}</span></h4>
                  <hr />
                  <h5 style={{fontFamily: 'poppins', fontSize:14}} className="p-2"><q>{reviewDetails}</q></h5>
            </div>
      );
};

export default Review;