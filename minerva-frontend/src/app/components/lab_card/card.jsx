import React from 'react'
import './card.css'

const card = ({title="Cloud Computing lab",faculty="so many people",staff="again so many people",location="idek bro"}) => {
  return (
    <div className='pb-2 px-4 h-[22vh] box relative'>
        <p className='text-accent font-mont text-2xl sm:text-4xl font-bold h-[40%] flex justify-left items-center'>{title}</p>
        <p className='text-accent font-mont sm:text-2xl'>Faculty in charge : <span className='text-black font-normal'>{faculty}</span></p>
        <p className='text-accent font-mont sm:text-2xl'>Staff in Charge : <span className='text-black font-normal'>{staff}</span></p>
        <p className='text-accent font-mont sm:text-2xl'>Location : <span className='text-black font-normal'>{location}</span></p>
    </div>
  )
}

export default card