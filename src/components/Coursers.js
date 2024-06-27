import React from 'react'
import image from '../image/course.png'
const Coursers = () => {
    const course =[
        {id:1,name:"Web Development",fees:5000},
        {id:2,name:"Mobile Development",fees:6000},
        {id:3,name:"Data Science",fees:7000},
        {id:4, name:"Python" , fees:3000},
        {id:5,name:"Java",fees:3000},
        {id:6,name:"C#",fees:5000},
        {id:2,name:"Java Script",fees:6000},
        {id:3,name:"IT",fees:7000},
        {id:4, name:"C" , fees:3000},
        {id:5,name:"Flatter",fees:3000}
    ]
  return (
    <div className='mt-5 container mx-auto  md:px-0 w-[90%] '>
        <div className='md:bg-slate-200 bg-white  rounded-md md:px-3 px-0 py-4'>
        <p className='text-xl font-bold'>All Courses</p>
        <div className=' flex space-x-6 mt-10 overflow-x-auto'>
        {course.map((course) =>(
 <div className='brounded-md h-60 w-64 md:bg-white bg-slate-200 rounded-md shadow-xl flex-shrink-0 '>
           <img src={image} alt=' ' />
           <div className='flex flex-col justify-center items-center '>
           <p className='text-xl font-bold'>{course.name}</p>
           <p className='text-gray-900 font-semibold'>Rs.{course.fees}</p>
           </div>
 </div>
        ))}
       </div>
        </div>
 
    </div>
  )
}

export default Coursers
