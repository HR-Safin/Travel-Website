import React from 'react'
import Tour from "./Tour"
const DisplayTour = () => {
  return (
    <div name="tour" className=''>
        <div className='max-w-[1440px] mx-auto  md:py-10 pt-96 text-center p-6'>
        <h2 className='text-cyan-500 font-semibold tracking-widest text-sm'>CHOOSE YOUR PLACE</h2>
        <h2 className='text-4xl font-semibold'>POPULAR TOURS</h2>
        <div className=' grid mx-auto py-16 lg:grid-cols-3 sm:grid-cols-2 px-10 gap-10 '>
            {Tour.map((tours) => (
                <div key={tours.id} className='relative'>
                    <img className='object-cover rounded-lg' src={tours.image} alt={tours.id} />
                    <div className=' bg-gray-900/30 rounded-lg w-full h-full absolute top-0 left-0'>
                        <p className=' left-4 bottom-4 text-white absolute text-2xl font-bold'>{tours.name}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
      
    </div>
  )
}

export default DisplayTour
