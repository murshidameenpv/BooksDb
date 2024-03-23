/* eslint-disable no-unused-vars */

import { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const StarRating = ({
  maxRating = 5,
  color = "text-yellow-600",
  onSetUserRating,
}) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const handleRating = (rating) => {
    setRating(rating);
    onSetUserRating(rating);
  };
  return (
    <div className="flex items-center">
      {Array.from({ length: maxRating }, (key, index) => (
        <Star
          key={index}
          color={color}
          isFull={tempRating ? tempRating >= index + 1 : rating >= index + 1}
          onRate={() => handleRating(index + 1)}
          onHoverIn={() => setTempRating(index + 1)}
          onHoverOut={() => setTempRating(0)}
        />
      ))}
      <div>{tempRating || rating || ""}</div>
    </div>
  );
};

export default StarRating;
StarRating.propTypes = {
  maxRating: PropTypes.number,
  onSetUserRating: PropTypes.func,
  color: PropTypes.string,
};
