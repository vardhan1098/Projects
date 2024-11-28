import React, { useState } from "react";
import './star.css';

const Star = ({ totalStars = 5, initialRating = 0, onRate }) => {
  const [stars, setStars] = useState(initialRating);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarClick = (rating) => {
    setStars(rating);
    if (onRate) onRate(rating);
  };

  const handleStarHover = (rating) => {
    setHoveredStar(rating);
  };

  const handleStarMouseOut = () => {
    setHoveredStar(0);
  };

  return (
    <div>
      <h2>Your Star Rating is: {stars}</h2>
      <div className="star-rating">
        {[...Array(totalStars)].map((_, index) => {
          const starNumber = index + 1;
          return (
            <span
              key={starNumber}
              className={`star ${stars >= starNumber ? 'selected' : ''} ${hoveredStar >= starNumber ? 'hovered' : ''}`}
              onClick={() => handleStarClick(starNumber)}
              onMouseEnter={() => handleStarHover(starNumber)}
              onMouseLeave={handleStarMouseOut}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Star;
