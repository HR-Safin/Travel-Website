import React from 'react'
import {FaCheckCircle,FaPhoneAlt} from "react-icons/fa"
import Img from "./assests/aboutpage2.jpg"
const About = () => {
  return (
    <div name="about" className='w-full h-screen py-20'>
      <div className=' max-w-[1440px] mx-auto flex flex-col sm:max-md:flex sm:flex-col md:flex md:flex-row  justify-between md:max-md:pr-52 md:pl-52 md:p-32 p-10 '>
        <div className=' pb-10 md:pb-2 '>
        <h6 className='text-cyan-400 text-sm tracking-widest pb-2 md:text-md'>THE BEST TRAVEL AGENCY</h6>
        <h2 className='md:text-5xl text-4xl pb-7 font-semibold md:w-[80%]'>DISCOVER THE<strong className='text-cyan-500'> WORLD</strong> WITH OUR GUIDE</h2>
        <p className='md:w-[70%] w-[95%] text-gray-500 pb-6'>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
        <p className='md:w-[70%] w-[95%] text-gray-500'>Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>
        <div className='flex items-center pt-6 pb-2'>
         <FaCheckCircle className='text-cyan-500 text-2xl' />
         <h2 className='text-gray-500 pl-2'>20 years of experience</h2>
        </div>
        <div className='flex items-center'>
            <FaCheckCircle className='text-cyan-500 text-2xl' />
            <h2 className='text-gray-500 pl-2'>150+ Tour Destination</h2>
        </div>
        <div className='flex items-center pt-6'>
         <FaPhoneAlt className='text-4xl text-cyan-500' />
         <div className='pl-3'>
         <h2 className='text-gray-500'>For More Information</h2>
         <h2 className='text-cyan-500 font-semibold'>00099887777</h2>
         </div>
         
        </div>
        </div>
        <div className=' mx-auto'>
        
        
        <img className='md:w-[750px] md:h-[500px] sm:w-[500px] sm:h-[480px] w-[500px] h-[400px] rounded-lg shadow-lg transform hover:scale-90 duration-500 transition-all object-cover   ease-in-out hover:cursor-pointer' src={Img} alt="image" />
        
           
            
        </div>
        </div>
        
        <div>
       
        
      </div>
      
    </div>
  )
}

export default About
