import React, { useEffect, useState } from 'react'
import axios from 'axios';
 import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import Footer from "./Footer"

const Home = ({markets, setMarkets, newArrivals, setNewArrivals}) => {
//  const [markets, setMarkets] = useState([])
//  const [newArrivals, setNewArrivals] = useState([])
//  useEffect(()=>{
//  const fetchPosts = async ()=>{
//    try{
//      const response = await axios.get("http://localhost:3500/markets")
//      const res = await axios.get("http://localhost:3500/newarrivals")
//    setMarkets(response.data)
//    setNewArrivals(res.data)
//    }
//    catch(error){
//     console.error('Error fetching users:', error);
//    }
//  }
// fetchPosts()
//  },[])



    const [email, setEmail] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
function submit(e){
  e.preventDefault()
  axios.post('http://localhost:3500/email', { email })
.then(response => {
  console.log(response.data)
setIsSubmit(true)   
  setEmail("")
})    .catch(err => console.log(err))
}


const navigate = useNavigate()
function detail(id){
    navigate(`/detail/${id}`)
}
function newDetail(id){
    navigate(`/newdetail/${id}`)
}

{markets?.map(item => (
  <div key={item.id}>{item.name}</div>
))}

return (
    <>
<motion.section initial={{opacity: 0, y: -100}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
     className='home-div'>
        <div className='home-inner lg:w-[35%] relative top-50 text-center lg:left-[60%] lg:text-start leading-8 lg:leading-6' >
      <h1 className='text-white font-extrabold lg:text-6xl text-3xl'>HOME DECOR</h1>
      <p className='bg-p text-sm lg:mt-6 ' >Lorem ipsum dolor sit amet consectetur.</p>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       <button  className='bg-button bg-green-950 rounded-full'>LEARN MORE</button>
        </div>
        </motion.section>

{/* second-section */}
<motion.section initial={{opacity: 0, x:200}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true}}
 className='second-section text-center w-[80%] mx-auto'>
    <div className='second-text mb-6 leading-8 '>
    <h1 className='text-amber-700 text-bold'>Decoration, renovation, inspiration</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.adipisicing </p>
</div>

<div className="flex flex-col lg:flex-row gap-4">

  <div className="flex flex-row  gap-4 basis-2/3">
    <div
      className="group h-62.5 flex-1 bg-cover bg-center rounded-2xl "
      style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}
    ><div className='rounded-2xl lg:hover:bg-amber-500/40 h-62.5'><h1 className='text-3xl translate-y-40  lg:opacity-0 lg:translate-y-0  lg:group-hover:opacity-100 lg:group-hover:translate-y-40 transition duration-500'>Beddings</h1></div></div>

    <div
      className="group h-62.5 flex-1 bg-cover bg-center rounded-2xl "
      style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}
    ><div className=' h-62.5 rounded-2xl lg:hover:bg-amber-500/40'><h1 className='text-3xl translate-y-40  lg:opacity-0 lg:translate-y-0  lg:group-hover:opacity-100 lg:group-hover:translate-y-40 transition duration-500'>Flowers</h1></div>
  </div>
  
  </div>

  <div
    className="group h-62.5 lg:basis-1/3 basis: 3/3 bg-cover bg-center rounded-2xl hover:hover:bg-black/40"
    style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}
    ><div className=' h-62.5 rounded-2xl lg:hover:bg-amber-500/40'><h1 className='text-3xl translate-y-40  lg:opacity-0 lg:translate-y-0  lg:group-hover:opacity-100 lg:group-hover:translate-y-40 transition duration-500'>Chairs</h1></div>
</div>
</div>
</motion.section>

{/* third section */}
<motion.section initial={{opacity: 0, y: 100}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                     className='third-section w-[80%] text-center mx-auto'>
  <h1 style={{marginBottom: "40px"}}>Items</h1>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4  px-4">  
      {markets.map((market)=>(
    <div className='' key={market.id}>
      <img className='w-full rounded-2xl' src={market.image} alt="" />
         <h3 className=''>{market.name}</h3>
         <p className=''>{market.price}</p>
         <p className=''>{market.others}</p>
          <div className=' bg-amber-200  w-[60%] justify-self-center rounded-2xl third-section-btn'>
          <button onClick={()=>detail(market.id)} className=' text-xs lg:text-sm'> Select options</button>
          </div>
  </div>
    ))}
  </div>
</motion.section>


{/* fouth section */}
<motion.section initial={{opacity: 0, scale: 0.4}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, scale: 1}}
                    viewport={{once:true}}
 style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}
  className="fouth-section w-full text-center h-52.5  bg-cover bg-center">
  <div className='h-62.5 flex flex-col justify-center w-50 justify-self-center leading-8 items-center'><h1>50% OFF</h1>
   <p>em produtos selecionados</p>
   <button className="fouth-section-btn bg-amber-200 rounded-2xl w-30 ">See More</button>
   </div>
</motion.section>

{/* fifth section */}
<motion.section initial={{opacity: 0, y: 100}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}

className='fifth-section bg-pink-200 h-[120] lg:h-[75vh]'>
  <div className='fifth-section-div flex flex-col lg:flex-row  gap-10  w-[90%] mx-auto'>
  <div className='text-center lg:text-start lg:w-[50%] leading-7  lg:content-center '> 
    <h1 className='text-3xl lg:text-5xl text-amber-950'>Espelho Decorativo</h1>
    <div className='translate-y-80 lg:translate-y-0'>
    <p>O queridinho do Pinterest que transforma qualquer ambiente.
Um toque moderno e elegante para deixar sua casa ainda mais estilosa.</p>
<p className='fifth-section-price'>$120.00</p>
<p>ou 5x de R$ 24,00 sem juros</p>
<button className='fifth-sec-btn bg-green-950 rounded-3xl hover:bg-amber-900'>Add to cart</button></div>
  </div>
  <div className='h-62.5 lg:w-[50%]  rounded-bl-[100px] rounded-tr-[100px]  bg-cover bg-right justify-self-center  -translate-y-67 lg:translate-y-0'
  style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}></div></div>
</motion.section>


{/* six section */}
<motion.section initial={{opacity: 0, x: -100}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true}}
 className='third-section w-[90%] text-center mx-auto'>
  <h1 style={{marginBottom: "40px"}} >New Arrivals</h1>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4  px-4">  
      {newArrivals.map((newarrival) =>(
    <div className='' key={newarrival.id}>
      <img className='w-full rounded-2xl' src={newarrival.image} alt="" />
         <h3 className=''>{newarrival.name}</h3>
         <p className=''>{newarrival.price}</p>
         <p className=''>{newarrival.others}</p>
         <div className=' bg-amber-200 w-[60%]  justify-self-center rounded-2xl  third-section-btn'>
          <button onClick={()=>newDetail(newarrival.id)}
           className='lg:text-sm text-xs'> Select options</button>
         </div>
  </div>
    ))}
  </div>
</motion.section>


{/* seventh section */}

<motion.section initial={{opacity: 0, y: -100}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
className='seventh-section flex flex-col lg:flex-row gap-4 w-[90%] mx-auto' >
  <div className='basis-1/3 flex-col flex gap-4 lg:text-[13px]'>
    <h1 className='text-green-700 text-3xl'>nosso blog</h1>
    <p>No nosso blog você encontra inspirações e dicas práticas de decoração para deixar sua casa ainda mais acolhedora.</p>
    <p>Descubra produtos úteis, funcionais e cheios de estilo para o dia a dia.</p>
    <p>Tudo isso e muito mais para transformar cada cantinho em um espaço especial</p>
  </div>
  <div className='flex basis-2/3 gap-4'>
  <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}
   className=' h-52.5 lg:h-72.5 flex-1  bg-cover bg-center rounded-2xl'></div>
  <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}
   className=' h-52.5 lg:h-72.5 flex-1 bg-cover bg-center  rounded-2xl'></div>
  </div>
</motion.section>

{/* eight section */}
<motion.section initial={{opacity: 0, x: -100}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:true}}
 className='eight-section text-center '>
<h1 style={{marginBottom: "40px"}}>nosso Instagram</h1>
 <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4'>
  <img className='rounded-xl'
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s" alt="" />
  <img className='rounded-xl'
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s" alt="" />
  <img className='rounded-xl'
   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s" alt="" />
  <img className='rounded-xl'
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s" alt="" />
 </div>
</motion.section>

{/* nineth-section */}
<motion.section initial={{opacity: 0, y: 100}}
                    transition={{duration:1}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
 style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpmVpH9cpE9jas__TcQ1ESp4VPo-jfD4gvQ&s')"}}
   className='nineth-section h-72.5 flex flex-col justify-center gap-8  bg-cover bg-center text-center'>
 <div className='nineth-sec-div'><h1>Receba promoções exclusivas!</h1>
 <p>se inscreva na nossa lista de e-mail marketing.</p></div>
 <form action="" onSubmit={submit}
  className='flex flex-col gap-4 justify-center items-center'>
  <label htmlFor="email"></label>
  <input type="email" id="email"  placeholder='type your email here' 
  className='input bg-white text-black lg:w-[30%] w-[80%] rounded-2xl'
    onChange={(e) =>setEmail(e.target.value)}/>
  <button className='button bg-amber-900 rounded-3xl'>{isSubmit ? "Submitted" : "Submit" }</button>
 </form>
</motion.section>

<Footer />

  </>
  )
}

export default Home

