import axios from "axios";

const api=axios.create(
    {
        baseURL:'https://dummyjson.com/products'
    }
)

const GetDetails=()=>{
    return api.get("")
}
export default GetDetails;