import React, { useEffect, useState } from 'react'
import {FaTimes, FaBars} from "react-icons/fa"
import Img1 from "./assests/first1.jpg"
import Img2 from "./assests/pexels-дмитрий-трепольский-11107472.jpg"
import Img3 from "./assests/new2.jpg"
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
} 
//  const [currentImage, setCurrentImage] = useState(0)
//  const [image, setImage] = useState([
//   Img1,
//    Img2,
//     Img3
//  ])

//  useEffect(() => {
//    const interval = setInterval(() => {
//     setCurrentImage((currentImage + 1) % image.length)
//    },4000)
//    return () => clearInterval(interval)
//  }, [currentImage, image])
  return (
    <div name="home" className=' relative h-screen '>
      <nav className=' w-full rounded-xl    h-[80px] px-6  flex justify-between items-center font-mono  shadow-xl bg-white text-black '>
      <h2 className='md:text-3xl md:pl-20 pl-6 text-3xl font-semibold text-blue-500 tracking-wider'>TravelGo</h2>
    
    <ul className='hidden md:flex md:items-center   text-base space-x-14 pr-28 tracking-wider  text-black p-2'>
      <li className=' cursor-pointer hover:text-sky-500 tracking-wider'><Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
      </li>
      <li className=' cursor-pointer hover:text-sky-500 tracking-wider'><Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
</li>
      <li className=' cursor-pointer hover:text-sky-500 tracking-wider'><Link  to="destination"  smooth={true} duration={500} >
          Destination
        </Link>
</li>
      <li className=' cursor-pointer hover:text-sky-500 tracking-wider'><Link  to="tour"  smooth={true}  duration={500} >
         Tour
        </Link>
</li>
      

      
      
    </ul>
    <div onClick={handleClick} className='  text-black md:hidden z-10 text-2xl '>
    {!nav ? <FaBars /> : <FaTimes /> }
    </div>
    {/* Mobile View */}
    <ul className={!nav ? "hidden" : 'absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center bg-white  text-black '}>
      <li className='py-6 text-3xl'><Link onClick={handleClick}  to="home"  smooth={true} duration={500} >
          Home
        </Link>
</li>
      <li className='py-6 text-3xl'><Link onClick={handleClick}  to="about"  smooth={true}  duration={500} >
          About
        </Link>
</li>
      <li className='py-6 text-3xl'><Link onClick={handleClick}  to="destination"  smooth={true}  duration={500} >
          Destination
        </Link>
</li>
      <li className='py-6 text-3xl'><Link  onClick={handleClick}  to="tour"  smooth={true}  duration={500} >
          Tour
        </Link>
</li>
      


      
    </ul>
      </nav>
      <div className='bg-center bg-opacity-50 bg-cover h-screen w-full bg-fixed bg-no-repeat' style={{backgroundImage: `url(${Img1})`}}>
      <div className='  mx-auto h-full flex items-center justify-center'>
        <div className='w-full text-center'>
          <h6 className='text-white tracking-widest text-md font-mono font-bold'>LET'S TRAVEL WORLD WITH US</h6>
        <h2 className='text-3xl md:text-6xl text-white font-bold tracking-wider'>Explore The World With<br></br>TravelGo </h2>
        <div class=" space-y-8">
       <input type="text" placeholder="Search" className="py-2 px-3 border border-gray-300 w-[50%] md:w-[30%] rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 flex-grow"/>
         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">Search</button>
</div>
        </div>

      </div>
      
        
      </div>
    </div>
  )
}

export default NavBar
