const Prodetails=(props)=>{
const {desc}=props
const {width,height ,depth}=props.dim

return(
    <>
    <div className="boxDiv boxP">
    <p className="ProH1">Product Details</p>
    <p className="proD">Dimensions</p>
    <ul className="ProUl">
        <li className="proLi">Width : {width}</li>
        <li className="proLi">Height : {height}</li>
        <li className="proLi">Depth : {depth}</li>
    </ul>
    <p className="proD">Description</p>
    <p className="ProUl">{desc}</p>
    </div>
    </>
)

}
export default Prodetails;