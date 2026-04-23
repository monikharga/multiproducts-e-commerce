import axios from "axios";
import { useEffect, useState } from "react";
import GetDetails from './current'
import Card from "./Card";
import Details from "../Pages/Details/Details";

// import './Nav/Nav.css'
function Axioss() {

    const [fetcData, setFetchData] = useState([])
    const fetchApi = async () => {
        try {
            let data = await GetDetails()
           
            setFetchData(data.data.products)
          
        
            
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    
    return (
        <>
            <div className="cardCon">
                {
                    fetcData.map((curEle) => {
                        return (
                            
                                <Card
                                    key={curEle.id}
                                    id={curEle.id}
                                    title={curEle.title}
                                    img={curEle.images}
                                    price={curEle.price}
                                    discount={curEle.discountPercentage}
                                    rating={curEle.rating}
                                    reviews={curEle.reviews}
                                    stock={curEle.availabilityStatus}
                                />

                            
                        )

                    })
                }
            </div>


        </>
    )
}
export default Axioss;