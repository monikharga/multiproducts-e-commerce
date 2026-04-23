import { useState } from "react";
import Reviews from './Reviews'
const Rating = (props) => {
    const { rating, reviews ,id } = props


    return (
        <>
            <div className="boxDiv boxP">
                <p className="P">Product Ratings and Reviews</p>
                <div className="Rating flex" >
                    <div className="rate">
                        <p>{rating}<sup>&#9733;</sup> </p>
                    </div>
                    <div>
                        <p>{rating} Rating</p>    
                    </div>
                </div>
                <hr></hr>
                <Reviews  
                    reviews={reviews}
                    id={id}
                />

            </div>
        </>
    )
}

export default Rating;