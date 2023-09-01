import React from 'react'
import {clients} from '../data/data'

const Clients = () => {
    console.log(clients)
  return (
      <div className='max-w-[1520px] m-auto px-4 py-4'>
        <h3 className='text-blue-700 font-bold text-4xl text-center'>Our Clients</h3>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-3 py-5 px-2'>
          {clients.map((item)=>(
            <div 
            key={item.id}
            className='p-4 flex justify-start items-center hover:scale-105 duration-300'>
              <img 
              className='object-cover rounded-xl w-40 h-15 cursor-pointer shadow-xl'
              src={item.image}
              alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
  )
}

export default Clients
