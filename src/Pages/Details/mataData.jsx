import { useState } from 'react'
import './mataData.css'
import { useNavigate } from 'react-router-dom'
import CartImg from './Cart1.png'
const MataData = (props) => {
    const Nevigate = useNavigate()

    const [image, setImage] = useState(props.image)
    const [img, setImg] = useState(image[0])

    const handleImage = (index, img) => {
        setImg(img)
    }

    return (
        <>
            <div className='Div'>
                <div className='divDivider'>
                    <div className='detailsDivImg'>
                        {props.image?.length >= 0 && (
                            props.image.map((e, i) => {
                                console.log("image", image);
                                return (
                                    <div
                                        key={i}
                                        onClick={() => handleImage(i, e)}
                                        className='detailImage'>
                                        <img src={e} /></div>)
                            })
                        )}
                    </div>
                    <div className='CartImg'>
                        <div className='Img'>
                            <img src={img} />
                        </div>
                        <div className='CartDiv'>
                          
                            <button>Add to Cart 
                                <img src={CartImg} alt='img' ></img>
                            </button>
                            
                                <button>Buy Now</button>
                        </div>
                    </div>

                </div>
                <hr />
                <div>
                    <p>Count of Similar product</p>

                </div>
            </div>

        </>
    )
}

export default MataData;