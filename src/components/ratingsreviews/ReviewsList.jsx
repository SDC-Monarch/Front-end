import React from 'react';
import ReviewCard from './ReviewCard.jsx';

const ReviewsList = ({reviews, displayNum}) => {

  return (
    <div id="ReviewList" className="h-48 bg-slate-200 mx-auto px-3">
    <div>
      <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <div className="text-xs">Username, January 1, 2019</div>
    </div>
    <div className='font-semibold truncate'>
      Review Title with word-break truncation to prevent wrapping onto the next...
    </div>
    <div className='font-light'>
      ... line, if necessary
    </div>
    <div>
      I really like these camisole pants man. Bought the last 100 on blackfriday sale.
    </div>
    <div>
      <p className='text-xs'>Helpful? <span>Yes</span> | <span>Report</span></p>
    </div>
  </div>
  )
};

export default ReviewsList;