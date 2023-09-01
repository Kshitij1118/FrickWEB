import React, {useState} from 'react'
import {ArrowSmRightIcon} from '@heroicons/react/outline'
import {rangeData} from '../data/data'

const Range = () => {
  const [product] = useState(rangeData)

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h3 className='text-blue-700 font-bold text-4xl text-center'>Product Range</h3>
      <p className='text-center py-4'>Frick India has been providing refrigeration solution to almost all the vital industries, related to Food and Agriculture, DairyProduction, Meat, Fisheries and Livestock, Beverages and Breweries, Chemical and Pharmaceutical Industry etc.</p>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {
            product.map((item)=>(
                <div key={item.id} className='border-none hover:scale-105 duration-300'>
                    <img src={item.image}
                    alt={item.name}
                    className='w-full h-[200px] object-cover rounded-lg'
                    />
                    <div className='flex justify-between py-2 px-2'>
                        <p className='font-bold'>{item.name}</p>
                    </div>
                    <div className='pl-2 py-4 -mt-7'>
                        <p className='flex items-center text-indigo-600'>View More<ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Range
