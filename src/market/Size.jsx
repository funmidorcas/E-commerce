import React, {useEffect, useState} from 'react'

 const Size = () => {
// const [width, setWidth] = useState(window.innerWidth)
// const [height, setHeight] = useState(window.innerHeight)

// useEffect(()=>{           // arrow function style
// window.addEventListener("resize", handleResize);
// console.log("event added");

// return () =>{
//     window.removeEventListener("resize",handleResize)
//     console.log("event removed");
// }
// },[])

// useEffect(() =>{
//     document.title = `size: ${width} x ${height}`;
// }, [width,height]);


// // window.addEventListener("resize", handleResize);    // this alone re-run too many times, move it to useEffect  //resize is another event like click
// function handleResize(){
//     setWidth(window.innerWidth  >= '1024px'? window.innerWidth === '768px' : window.innerWidth === '1024px')
//     setHeight(window.innerHeight)
//  }


  return (
    <div style={{ padding: '100px'}} className='hidden 
    lg:flex lg:gap-6 lg:justify-end lg:fixed lg:h-2 bg-amber-500
     lg:top-4 lg:bottom-0 lg:inset-0 lg:w-full lg:justify-self-end' >
        <button >
            +
        </button>
        <button >
            -
        </button>
    </div>
  )
}

export default Size

//  <div>
//                   <p>width:{width}px</p>
//             <p>Height:{height}px</p>

//  </div>
