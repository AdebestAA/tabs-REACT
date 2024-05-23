import React, { useState } from 'react'
import {data} from "./data"
const Tabs = () => {
    console.log(data);
    const [currentIndex,setCurrentIndex] = useState(0)

const handleChange = (indexGotten)=>{
setCurrentIndex(indexGotten)
}
  return (
    <div className='container'>
        <section className='labels-container'>

{data.map((item,index)=>{
    
    return (
        <div onClick={()=> handleChange(index)} className={`each-label  ${currentIndex === index ? "active" : ""}`} key={index}>
            {item.label}
        </div>
    )
})}
</section>
<section className='contents-container'>
{data[currentIndex].content}
</section>
    </div>
  )
}

export default Tabs
