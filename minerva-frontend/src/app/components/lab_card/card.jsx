import React from 'react'

const card = ({title="Cloud Computing lab",faculty="so many people",staff="again so many people",location="idek bro"}) => {
  return (
    <div className='pb-2 px-4 h-[33vh] box relative mb-10'>
        <p className='text-accent font-jakarta text-2xl sm:text-4xl md:text-5xl font-bold h-[40%] flex justify-left items-center'>{title}</p>
        <p className='text-accent font-jakarta sm:text-2xl md:text-2xl my-2'>Faculty in charge : <span className='text-black font-normal'>{faculty}</span></p>
        <p className='text-accent font-jakarta sm:text-2xl md:text-2xl my-2'>Staff in Charge : <span className='text-black font-normal'>{staff}</span></p>
        <p className='text-accent font-jakarta sm:text-2xl md:text-2xl my-2'>Location : <span className='text-black font-normal'>{location}</span></p>
        <div className='h-1 mt-4 mb-4' style={{ backgroundColor: '#800080' }}></div>
    </div>
  )
}

export default card