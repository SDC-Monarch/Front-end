import React from 'react';
import { useState, useEffect } from 'react';

const RatingsReviews = ({product}) => {

  return (
    <div id='ratings-reviews'>
      Ratings & Reviews
      <Ratings product={} />
      <Reviews product={}/>
      <ReviewForm product={}/>
    </div>
  )
}

export default RatingsReviews;