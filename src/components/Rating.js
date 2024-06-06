import React from 'react'
import './Rating.css'

const Rating = ({ starCount }) => {
    const stars = [];

    for (let i = 0; i < 10; i++) {
        stars.push(<span key={i} className={`fa fa-star ${i < starCount ? 'checked' : ''}`}></span>);
    }

    return (
        <div className='ratingContainer'>
            <h2 className='ratingHeadline'>Rating</h2>
            {stars}
        </div>
    )
}

export default Rating