import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "/src/assets/react.svg"
import { FaBars, FaCartPlus, FaLaptop, FaMobile, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'

const Navbar = ({cart}) => {
        const [isMenu, setIsMenu] = useState(false)
    useEffect(()=>{
        document.body.style.overflow= isMenu ? "hidden" : "auto"
 return (()=> document.body.style.overflow = "auto")
    })

const navigate = useNavigate()
    function submit(){
  navigate("/orderconfirm")

}
const cartCount = cart.reduce((total, item) => total + item.count, 0)
// const [showPhonePreview, setShowPhonePreview] = useState(false)
// onClick={() => setShowPhonePreview(prev => !prev)}
  return (
    <section  className='nav-section w-full  '>

           
           <div style={{paddingRight: '20px',paddingBlock: '10px'}} className='text-blue-800 bg-white w-full h-10 hidden lg:flex lg:justify-end  lg:gap-6 '>
              <button><FaLaptop size={24} /></button>
              <button><FaMobile size={24} /></button>
              </div>

      <div className='nav-info w-full  items-center flex justify-end lg:justify-center'>
        <motion.h1 initial={{ x: "100%", opacity: 0 }}
  animate={{ x: "-100%", opacity: [0, 1, 1, 0] }}
  transition={{
    duration: 12,
    ease: "linear",
    repeat: Infinity
  }}
       className='' >Thank you for shopping with us!</motion.h1>
        </div>
   <div className='nav-inner flex justify-between h-20'>
    <img src={logo} alt="brand-logo" />
    <button className={`${isMenu ? "toggle active" : "toggle"}`}
     onClick={()=>{setIsMenu(prev => !prev)}}>
      {isMenu ?  <FaTimes size={25} /> : <FaBars size={25} />}
      </button>
    <nav className={` ${isMenu ? "menu open" : "menu"}`}>
        <ul className='nav-ul lg:mt-10 flex flex-col lg:flex-row gap-6 absolute lg:relative'>
            <NavLink to="/" onClick={(() => setIsMenu(false))}>Home</NavLink>
            <NavLink to="about" onClick={(() => setIsMenu(false))}>About</NavLink>
            <NavLink to="review" onClick={(() => setIsMenu(false))}>Review</NavLink>
            <NavLink to="account" onClick={(() => setIsMenu(false))}>Account</NavLink>
        </ul>
    </nav>
    <div className='flex gap-4 relative right-23 lg:right-0 '>
       <button><FaSearch /></button>
    <div onClick={submit} className='relative top-3'><button className=''><FaCartPlus /></button>
    <span className='relative bottom-5 right-3'>{cartCount}</span></div>
 <button><FaUser /></button>
    </div>
   </div>
    </section>
  )
}

export default Navbar