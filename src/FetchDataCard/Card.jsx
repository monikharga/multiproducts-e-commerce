import { useNavigate } from "react-router-dom";
const Card=(props)=>{
    const nevigate=useNavigate();
 return (
    <>
     
        <div className="container" key={props.id} onClick={()=>nevigate(`/Details/${props.id}`)}>
            <div className="imgCon">
                <img src={props.img[0]} className="image"></img>
            </div>
            <div className="paraCon">
                <p className="para">{props.title}</p>
            </div>
            <div className="priCon">
                <p className="price">${props.price}</p>
                
            </div>
        </div>
    
    </>
 )
}
export default Card;