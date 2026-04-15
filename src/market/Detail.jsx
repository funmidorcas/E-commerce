import React, { useEffect, useState } from 'react'
import { FaGreaterThan, FaHome, FaLessThan } from 'react-icons/fa'
import Footer from './Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = ({setCart}) => {
//  const [count, setCount] = useState(0)

const navigate = useNavigate()
function home(){
navigate("/")
}

const { id } = useParams()
const [fetch, setFetch] = useState(null)
const [currentSlide, setCurrentSlide] = useState(0)

useEffect(()=>{
    const fetchpost = async () =>{
        try{
            const res = await axios.get(`http://localhost:3500/markets/${id}`)
            setFetch(res.data)
        }
   catch(error){
    console.error('Error fetching item:', error);
   }
 }
 fetchpost()  
},[id])
 

  function add(){
          setFetch(prev => ({
    ...prev,
    count: prev.count + 1
  }))
  }
  function minus(){
    setFetch(prev => ({
    ...prev,
    count: prev.count > 0 ? prev.count - 1 : 0
  }))
  }


function addToCart(product){
  if(product.count === 0) return

  setCart(prev => {
    const existing = prev.find(item => item.id === product.id)

    if(existing){
      return prev.map(item =>
        item.id === product.id
          ? { ...item, count: item.count + product.count }
          : item
      )
    }
    return [...prev, { ...product }]
  })

  setFetch(prev => ({
    ...prev,
    count: 0
  }))
}
  const nextSlide = () => {
     if (!fetch?.moreimage) return
     setCurrentSlide(prev => (prev + 1) % fetch.moreimage.length)
  }
  const prevSlide = () => {
     if (!fetch?.moreimage) return
    setCurrentSlide(prev => (prev - 1 + fetch.moreimage.length) % fetch.moreimage.length)
  }

  useEffect(() => {
   if (!fetch?.moreimage) return
  const interval = setInterval(() => {
    setCurrentSlide(prev => 
      (prev + 1) % fetch.moreimage.length
    )
  }, 5000)
  return () => clearInterval(interval);
}, [fetch?.moreimage])


if (!fetch) return <div>Loading...</div>
  return (
  <section className='relative top-45 '>
<div className='detail-section-div w-[90%]  flex gap-2 text-xs'>
    <button onClick={home}> 
        <FaHome size={0} />
    </button>
    <FaGreaterThan  size={8} style={{marginTop: "4px"}}/>
    <button onClick={home} >Shop</button>
           <FaGreaterThan  size={8} style={{marginTop: "4px"}}/>
     <p>{fetch.name} </p>
</div>

    <div className='detail-section-div w-[90%] justify-start  '>
       <div className='flex gap-2'>
        <button onClick={prevSlide}
        className='relative top-20 justify-items-center content-center w-10 h-10'
        ><FaLessThan /></button>
        <img src={fetch.moreimage[currentSlide]} className='aspect-[1] object-cover rounded-xl w-[80%] lg:w-75 h-70 '
         alt="" />
            <button  onClick={nextSlide}
            className='relative top-20  justify-items-center content-center w-10 h-10'
                ><FaGreaterThan /></button> 
        </div> 

         <p className='detail-name'>{fetch.name}</p>
         <p>{fetch.price}</p>
         <p>{fetch.others}</p>
           <div className='relative top-6 bg-amber-200 w-[40%] lg:w-[20%] flex justify-self-start justify-between rounded-2xl third-section-btn'>
            <button onClick={()=> add(fetch.id)}  className=''>+</button>
            <span>{fetch.count}</span>
            <button onClick={()=> minus(fetch.id)} className=''>-</button>
          </div> 
    {fetch.count >= 1 && (
        <div className='detail-add-to-cart relative top-10 w-[40%] lg:w-[20%] rounded-2xl text-center bg-amber-200 third-section-btn'>
            <button onClick={() => addToCart(fetch)}>Add to Cart</button>
        </div>
) } 
</div>
    
     <Footer />
 </section>
  )
}

export default Detail

//  setCount(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    // setCount(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
//  <span  className=''> {count[fetch.id] || 0}</span> 
//    function add(id){
//     // const updated = 
//     setFetch(fetch.map((item) =>
//       item.id === id
//         ? { ...item, count: item.count + 1 }
//         : item
//     ))
// }
//    function minus(id){
//         // const updated = 
//            setFetch(fetch.map((item) =>
//       item.id === id && item.count > 0
//         ? { ...item, count: item.count - 1 }
//         : item
//         ))
 
// }
// function add(id){
// setFetch(fetch.id =>fetch.count + 1)
// }
// function minus(){

// }
