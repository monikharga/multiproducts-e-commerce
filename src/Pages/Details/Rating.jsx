import { useState } from "react";
import Reviews from './Reviews'
const Rating = (props) => {
  const { rating, reviews, id } = props

  const stars = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

  reviews.forEach(e => {
    stars[e.rating]++
  });

  // console.log("star", stars);

  const total = Object.values(stars).reduce((acc, cur) => acc + cur)
  // console.log("total ",total);

  //     const percet=[]
  //     for (let i in stars){
  //         console.log(stars[i]);
  //         percet[i]=Math.round((stars[i]/total)*100)

  //     }

  // console.log("per : ",percet);

  const getPercentage = (value) => {
    if (total === 0) return 0;
    return (value / total) * 100;
  };

  const getColor = (percent) => {
    if (percent >= 50) return "green";
    if (percent >= 30) return "red";
    return "orange";
  }


  return (
    <>
      <div className="boxDiv boxP">
        <p className="P">Product Ratings and Reviews</p>
        <div className="Rating flex flexR" >
          <div>
          <div className="rate">
            <p>{rating}<sup>&#9733;</sup> </p>
           
          </div >
          <div className="fillDiv">
           <p className="filled">{rating} Ratings</p>
           <p className="filled">{reviews.length} Reviews</p>
    </div>
</div>
          <div className="widthDiv">
            {[5, 4, 3, 2, 1].map((star) => {
              const percent = getPercentage(stars[star] || 0);

              return (
                <div
                  key={star}
                  className="divWidth flex"

                >
                  {/* Star label */}
                  <span className="starLabel">{star}★</span>

                  {/* Bar background */}
                  <div
                    className="backcolor"
                  >
                    {/* Filled bar */}
                    <div
                      className="filled"
                      style={{
                        width: `${percent}%`,
                        background: getColor(percent), // 👈 dynamic color
                        height: "100%",
                      }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <span style={{ width: "40px" }}>
                    {stars[star]}
                  </span>
                </div>
              );
            })}
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