import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { FaGreaterThan, FaHome } from 'react-icons/fa'

const Orderconfirm = ({ cart, setCart}) => {

const selected = cart.filter(item => item.count > 0)
const total = selected.reduce((sum, item) =>sum +  item.price * item.count, 0)
const subtotal = selected.map(item => ({
  ...item,
   total: Number(item.price) * Number(item.count)
}))
const navigate = useNavigate()
function home(){
navigate("/")
}
function payment(){
//     const clearedCart = cart.map(item => ({ ...item, count: 0 }))
//   setCart(clearedCart)
   // or
    //  setCart([])
    navigate("/complete")

}

// const total = cart.reduce((sum, item) => {
//   const price = Number(item.price) || 0
//   const count = Number(item.count) || 0
//   return sum + price * count
// }, 0)   //make sure currency sign are remove
// or const total = selected.reduce(
//   (sum, item) => sum + Number(item.price) * Number(item.count),
//   0
// )



if (!selected || selected.length === 0) {
  return <div className=' flex flex-col left-30 absolute top-50 '><p>Your cart is empty</p>
 <div className='detail-section-div  flex gap-2 text-x'>
  <button onClick={home}> 
        <FaHome size={0} />
    </button>
    <FaGreaterThan  size={8} style={{marginTop: "7px"}}/>
    <button onClick={home} >Shop</button>
    </div></div>
}

  return (
    <section className='relative top-50'>
<div className='detail-section-div w-[90%] flex gap-2 text-xs'>
    <button onClick={home}> 
        <FaHome size={0} />
    </button>
    <FaGreaterThan  size={8} style={{marginTop: "4px"}}/>
    <button onClick={home} >Shop</button>
</div>
    <div className='orderconfirm-div flex flex-col lg:flex-row   gap-4'>
      {subtotal.map((item) => (
        <div key={item.id} className='leading-8 p-6 w-64'>
          <img src={item.image} alt={cart.name}  className='rounded-xl' />
          <p>{item.name}</p>
          <p>{item.count}pcs * ${item.price}</p>
          <p className='bg-amber-200 w-[50%] rounded-md text-center'>${item.total}</p>

        </div>
      ))}
    </div >
    <div className='orderconfirm-div leading-9 text-center'>

 <p>Grand Total = ${total} </p> 
 <button onClick={payment}
  className=' bg-green-900 rounded-xl w-40'>Make Payment</button>

    </div>

<Footer />
    </section>

  )
}

export default Orderconfirm





