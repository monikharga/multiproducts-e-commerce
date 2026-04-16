const Box = (props) => {
    const { title, price, discount, rating, reviews, desc } = props
    // console.log("idd :", title);

    return (
        <>
            <div className="paraCon">
                <h1 className="para1">{title}</h1>
                {/* {desc && <p className="h">{d``esc}</p>} */}
            </div>
            <div className="priCon">
                <p className="price">&#8377;{Math.round((price * 80) - (((price * 80) * discount) / 100))}</p>
                <p className="tag1 tag">&#8377;{Math.round(price * 80)}</p>
                <p className="tag2 tag">{discount}% off</p>
            </div>

            <div className="RevRat">
                <div className="rating">
                    <p className="rating">{rating}  &#9733;</p>
                </div>

                <p className="review">{reviews.length} Reviews</p>

            </div>
        </>
    )
}

export default Box;