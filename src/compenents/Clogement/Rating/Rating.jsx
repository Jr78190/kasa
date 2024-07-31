// Rating.js

import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Rating.css';

const Rating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="rating-contained">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <FaStar 
                        key={index}
                        size={24}
                        className={starValue <= rating ? "filled-star" : "empty-star"}
                    />
                );
            })}
        </div>
    );
};

export default Rating;
