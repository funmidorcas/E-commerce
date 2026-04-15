import { Route, Routes } from "react-router-dom"
import Navbar from "./market/Navbar"
import Home from "./market/Home"
import Detail from "./market/Detail"
import Newdetail from "./market/Newdetail"
import { useState, useEffect } from "react"
import axios from 'axios';
import Orderconfirm from "./market/Orderconfirm"
import Complete from "./market/Complete"

// import About from "./market/About"


function App() {
 const [markets, setMarkets] = useState([])
 const [newArrivals, setNewArrivals] = useState([])
 
 useEffect(()=>{
 const fetchPosts = async ()=>{
   try{
     const response = await axios.get("http://localhost:3500/markets")
     const res = await axios.get("http://localhost:3500/newarrivals")
   setMarkets(response.data)
   setNewArrivals(res.data)
   }
   catch(error){
    console.error('Error fetching users:', error);
   }
 }
fetchPosts()
 },[])
const [count, setCount] = useState(0)
const [cart, setCart] = useState([])

  return (
    <>
<Navbar cart={cart} setCart={setCart} />
<Routes>
  <Route path="/"   element={
    <Home markets={markets} setMarkets={setMarkets} newArrivals={newArrivals} setNewArrivals={setNewArrivals}/> }/>
  <Route path="/detail/:id" element={<Detail 
  count={count} setCount={setCount} setCart={setCart} cart={cart}
  /> } />
  <Route path="/newdetail/:id" element={<Newdetail />} />
   <Route path="/orderconfirm" element={<Orderconfirm markets={markets} cart={cart} setCart={setCart} />} />
  <Route path="/complete" element={ <Complete  />}
  />
</Routes>
{/* <About /> */}
    </>
  )
}

export default App
