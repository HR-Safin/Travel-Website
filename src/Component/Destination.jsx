import React from 'react'

const Destination = () => {
  return (
    <div name="destination" className='max-w-[1240px] h-screen mx-auto px-4 text-center md:py-20 pt-96 sm:py-40'>
      <h2 className='text-sm sm:pt-10  tracking-widest text-cyan-500'>TOP DESTINATION</h2>
      <h3 className='text-4xl font-semibold pt-1'>POPULAR DESTINATION</h3>
      <div className='grid grid-rows-none md:gap-4 gap-4 md:grid-cols-5 py-8'>
         <img src="https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' />
         <img src="https://images.pexels.com/photos/373409/pexels-photo-373409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover' />
         <img src="https://images.pexels.com/photos/2783619/pexels-photo-2783619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover' />
         <img src="https://images.pexels.com/photos/1591379/pexels-photo-1591379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover' />
         <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover' />
         
      </div>
    </div>
  )
}

export default Destination
