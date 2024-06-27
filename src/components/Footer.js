import React from 'react'
import logo from "../image/logo3.png";
const Footer = () => {
  return (
    <div className='bg-blue-500 mt-5 py-4 h-auto '>
        <div className='grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-3 container mx-auto mt-10 gap-2 align-middle '>
            <div>
             <div className='bg-white rounded-full h-20 w-20'>
                <img src={logo} alt='' />
             </div>
             <div></div>
            </div>
            <div>
                <h1 className='text-white  font-semibold'>QUICK LINKS</h1>
                <ul className='flex flex-col space-y-3 justify-center px-3'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                </ul>
            </div>
           
            <div className='flex flex-col space-y-3'>
                <input type='text' className='bg-slate-50 py-3 rounded-md w-full px-10 '  />
                <button className='text-blue-500 font-bold bg-white w-full rounded-md py-3'>Subscribe</button>
            </div>
        </div>
     
    </div>
  )
}

export default Footer
