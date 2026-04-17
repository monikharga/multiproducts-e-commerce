const Reviews = (props) => {
    const { reviews } = props
    console.log(reviews);

    return (
        <>

            {
                reviews.map((e) => {
                    return (
                        <>
                            <div className="">
                                <p className="name ">{e.reviewerName}</p>
                                <div className="flex RatDat">
                                    <div className="rating R">
                                        <p className="rating r">{e.rating}  &#9733;</p>
                                    </div>
                                    <p className="date">{e.date}</p>
                                </div>
                                  <p className="comment">{e.comment}</p>
                            </div>
                        </>

                    )
                })
            }

        </>
    )
}

export default Reviews;