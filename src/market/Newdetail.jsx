import React, { useEffect, useState } from 'react'
import { FaGreaterThan, FaHome, FaLessThan } from 'react-icons/fa'
import Footer from './Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Newdetail = () => {
 const [count, setCount] = useState(0)
  function add(id){
 setCount(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
 
  }
  function minus(id){
 
    setCount(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }));
 
  }


const navigate = useNavigate()
function home(){
navigate("/")
}

const { id } = useParams()
const [newFetch, setNewFetch] = useState(null)
const [currentSlide, setCurrentSlide] = useState(0)

useEffect(()=>{
    const fetchpost = async () =>{
        try{
            const response = await axios.get(`http://localhost:3500/newarrivals/${id}`)
            setNewFetch(response.data)
        }
   catch(error){
    console.error('Error fetching item:', error);
   }
 }
 fetchpost()  
},[id])
 

  const nextSlide = () => {
     if (!newFetch?.moreimage) return
     setCurrentSlide(prev => (prev + 1) % newFetch.moreimage.length)
  }

  const prevSlide = () => {
     if (!newFetch?.moreimage) return
    setCurrentSlide(prev => (prev - 1 + newFetch.moreimage.length) % newFetch.moreimage.length)
  }

  useEffect(() => {
   if (!newFetch?.moreimage) return
  const interval = setInterval(() => {
    setCurrentSlide(prev => 
      (prev + 1) % newFetch.moreimage.length
    )
  }, 5000)

  return () => clearInterval(interval);
}, [newFetch?.moreimage])
if (!newFetch) return <div>Loading...</div>

  return (
  <section className='relative top-45 '>
<div className='detail-section-div w-[90%]  flex gap-2 text-xs'>
    <button onClick={home}> 
        <FaHome size={0} />
    </button>
    <FaGreaterThan  size={8} style={{marginTop: "4px"}}/>
    <button onClick={home} >Shop</button>
           <FaGreaterThan  size={8} style={{marginTop: "4px"}}/>
     <p>{newFetch.name} </p>
</div>

    <div className='detail-section-div w-[90%] justify-start  '>
       <div className='flex gap-2'>
        <button onClick={prevSlide}
        className='relative top-20 justify-items-center content-center w-10 h-10'
        ><FaLessThan /></button>
        <img src={newFetch.moreimage[currentSlide]} className='aspect-[1] object-cover rounded-xl w-[80%] lg:w-75 h-70 '
         alt="" />
            <button  onClick={nextSlide}
            className='relative top-20  justify-items-center content-center w-10 h-10'
                ><FaGreaterThan /></button> 
        </div> 

         <p className='detail-name'>{newFetch.name}</p>
         <p>{newFetch.price}</p>
         <p>{newFetch.others}</p>
           <div className='relative top-6 bg-amber-200 w-[40%] lg:w-[20%] flex justify-self-start justify-between rounded-2xl third-section-btn'>
            <button onClick={()=> add(newFetch.id)}  className=''>+</button>
            <span  className=''> {count[newFetch.id] || 0}</span>
            <button onClick={()=> minus(newFetch.id)} className=''>-</button>
          </div> 
    {count[newFetch.id] >= 1 && (
        <div className='detail-add-to-cart relative top-10 w-[40%] lg:w-[20%] rounded-2xl text-center bg-amber-200 third-section-btn'>
            <button>Add to Cart</button>
        </div>
) } 
</div>
 
    
     <Footer />
 </section>
  )
}

export default Newdetail

