import React from 'react'
import './card.css'

const card = ({title="Cloud Computing lab",faculty="so many people",staff="again so many people",location="idek bro"}) => {
  return (
    <div className='pb-2 px-4 h-[33vh] box relative'>
        <p className='text-accent font-jakarta text-2xl sm:text-4xl md:text-5xl font-bold h-[40%] flex justify-left items-center'>{title}</p>
        <p className='text-accent font-jakarta sm:text-2xl md:text-2xl my-2'>Faculty in charge : <span className='text-black font-normal'>{faculty}</span></p>
        <p className='text-accent font-jakarta sm:text-2xl md:text-2xl my-2'>Staff in Charge : <span className='text-black font-normal'>{staff}</span></p>
        <p className='text-accent font-jakarta sm:text-2xl md:text-2xl my-2'>Location : <span className='text-black font-normal'>{location}</span></p>
    </div>
  )
}

export default card