import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
 import logo from "/src/assets/react.svg"

const Footer = () => {


  return (
<footer className=' bg-pink-200'>
<div className='text-center gap-4 justify-self-center flex justify-center flex-col'>
  <div className=''><img src={logo} alt="" 
className='w-20  justify-self-center'/></div>

<p>123-456-7890</p>
<a href="info@emil.com"></a>
<div className='flex justify-center gap-20'>
 <a href=""><FaFacebook /></a> 
<a href=""><FaInstagramSquare /></a>
<a href=""><FaLinkedin /></a>
</div>
</div>
</footer>
  )
}

export default Footer