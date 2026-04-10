import Bird from './bird.jpg'
import './Nav.css'
import SignUp from '../signUp/Sign'
import { useNavigate } from 'react-router-dom'
const Nav=()=>{
 const navigate=useNavigate()
    return (
        <>
        <div className='NavBar'>
            <div>
                <img src={Bird} alt="image" className='birdImg'/>
            </div>
            <div id='links'>
                <a className='a' href="" target="_blank">Home</a>
                <a className='a' href="">Product</a>
                <a className='a' href="">About</a>
                <a className='a' href="">Contact</a>
                <button id='button'onClick={()=>navigate('/Signup')} >Sign Up</button>
            </div>
        </div>
        </>
    )

}

export default Nav;