import { useState } from "react";
import Star from "./Star";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const handleRating = (rating) => {
    setRating(rating);
  };
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (key, index) => (
        <Star
          key={index}
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
