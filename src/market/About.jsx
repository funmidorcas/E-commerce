import React, { useState } from 'react'

const About = () => {
const [name, setName] = useState('')
const [isClicked, setIsClicked] = useState(false)

function submit() {
  setIsClicked(true)
}

return (
  <div>
    <input 
      type="text" 
      onChange={(e) => setName(e.target.value)} 
      value={name}
    />

    <button onClick={submit}>submit</button>

    {isClicked && <p>{name}</p>}
    <p>done</p>
  </div>
)
}

export default About



{/* <section className='flex lg:flex-row flex-col lg:gap-4 gap-2' >
     <div className='two-bg flex lg:gap-4 gap-2 '>
  <div className='bg-bed'>
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <button onClick={submit}>submit</button>
    <p>{name}</p>
  </div>
  <div className='bg-flower'></div>
      </div>
  <div>
  <div className='bg-pillow'></div>
      </div>

</section>

 */}
