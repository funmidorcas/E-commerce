import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Complete = () => {
 const navigate = useNavigate()
    function backtoshop(){
  navigate("/")
    }
  return (
    <div className='leading-10 absolute top-50 justify-self-center text-center'>
   <h1><FaCheck size={24} className='relative top-8' /> Order Completed</h1>
<h1>Thank You for Shopping with us</h1>
<button className='bg-green-900 rounded-xl w-50' onClick={backtoshop}>Back to Shop</button>
    </div>
  )
}

export default Complete