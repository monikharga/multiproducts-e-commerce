import { useState } from "react";
import Reviews from './Reviews'
const Rating = (props) => {
    const { rating, reviews } = props


    return (
        <>
            <div className="boxDiv boxP">
                <div className="Rating">
                    <div>
                        <p>{rating}<sup>&#9733;</sup> </p>

                    </div>
                    <div>
                        <p>{rating} Rating</p>
                        <p></p>
                        {/* <p>{reviews} Reviews</p> */}
                    </div>
                </div>
                <hr></hr>
                <Reviews
                    keys={reviews.date}
                    reviews={reviews}
                />

            </div>
        </>
    )
}

export default Rating;