import React from 'react';
import user from '../../../../images/userIcon.png'

const Review = ({ review }) => {
      const { userName, date, reviewDetails } = review;
      return (
            <div className="review__card pb-3">
                  <h4 className="pt-3  fs-6 fw-bold text-success"><img style={{width:'10%',marginBottom:10}} src={user} alt="" /> {userName} <span style={{color:"gray", marginLeft:10}}>{date}</span></h4>
                  <hr />
                  <h5 className="p-2 fs-6"><q>{reviewDetails}</q></h5>
            </div>
      );
};

export default Review;