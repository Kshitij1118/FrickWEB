import React from 'react'
import { facilities } from '../data/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Facilities = () => {
  return (
    <>
    <h3 className='text-blue-700 font-bold text-4xl text-center'>Production Facilities</h3>
    <div className='hidden lg:flex max-w[1520px] m-auto py-6 px-2'>
        <Splide options={{perPage: 4, gap: "1rem", drag: "free", arrows: false}}>
        {
            facilities.map((item)=>{
                return(
                    <SplideSlide key={item.id}>
                    <div className='rounded-3xl relative'>
                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                            <p className='px-4 pt-4 font-bold text-2xl'>{item.title}</p>
                            <p className='text-white mx-4 text-1xl absolute bottom-4'>{item.desc}</p>
                        </div>
                        <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' 
                        src={item.img}
                        alt={item.title}
                        />
                    </div>
                    </SplideSlide>
                )
                })
        }
        </Splide>
    </div>
    </>
  )
}

export default Facilities
