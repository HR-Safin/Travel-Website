import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#002B5B] w-full h-[90vh] text-white pt-20 flex flex-col justify-center mx-auto items-center p-4 space-y-3 relative  '>
      <h2 className='sm:text-4xl md:text-5xl text-2xl font-semibold'>Exploring Possibilities and Potential</h2>
      <p className='text-gray-500 md:w-[50%] pl-4'>Blogs offer a wealth of information and inspiration for personal and professional growth. With their accessible format and diverse range of topics, there's something for everyone to explore and learn from.</p>
      <div className='pt-4'>
      <button className="md:pt-3 md:pb-3 md:pl-5 md:pr-5 pt-2 pb-2 pl-3 pr-3 rounded-lg hover:bg-sky-600 hover:border-sky-600 cursor-pointer border-2 border-white">Become a member</button>
      </div>
      
    </div>
  )
}

export default Home
