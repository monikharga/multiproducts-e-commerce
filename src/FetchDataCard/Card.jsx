// import 
import { useNavigate } from "react-router-dom";
const Card = (props) => {
   const nevigate = useNavigate();
    return (
        <>

            <div className="container" key={props.id} onClick={() => nevigate(`/Details/${props.id}`)}>
                <div className="imgCon">
                    <img src={props.img[0]} className="image"></img>
                </div>

                <div className="paraCon">

                    <p className="para1">{props.title}</p>

                </div>
                <div className="priCon">
                    <p className="price">&#8377;{Math.round((props.price * 80) - (((props.price * 80) * props.discount) / 100))}</p>
                    <p className="tag1 tag">&#8377;{Math.round(props.price * 80)}</p>
                    <p className="tag2 tag">{props.discount}% off</p>
                </div>

                <div className="RevRat">
                    <div className="rating"> 
                    <p className="rating">{props.rating}  &#9733;</p>
                   </div>
                  
                    <p className="review">{props.reviews.length} Reviews</p>
               
</div>
            </div>

        </>
    )
}
export default Card;