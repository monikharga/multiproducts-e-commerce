import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import MataData from './mataData'
import OtherDetails from "./OtherDetails";

const Details = (props) => {

    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await response.json()
            setProduct(data)
        }
        catch (error) {
            console.log("error");

        }

    }

    useEffect(() => {
        fetchData()
        console.log(product);
        
    }, [])

    return (
        <>
            {product ? (
                <MataData
                    id={product.id}
                    title={product.title}
                    desc={product.description}
                    image={product.images}
                />
            ) : (
                <p>Loading...</p>
            )}

            {
                product?(
                    <OtherDetails
                    id={product.id}
                    title={product.title}
                    discount={product.discountPercentage}
                    price={product.price}
                    rating={product.rating}
                    review={product.reviews}
                    />
                ):(
                    <p/>
                )
            }
        </>
    )
}

export default Details;