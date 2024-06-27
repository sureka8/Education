import React, { useState } from "react";
import logo from "../image/logo3.png";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
const Menu = () => {
    const MenuList = [
        {id:1 , name:'Home'},
        {id:2 , name:'About Us'},
        {id:3 , name:'Courses'},
        {id:4 , name:'Contact Us'},
    ]
    const [open,setOpen] = useState(false)
    const hanldeCLick =() =>{
        setOpen(!open)
    }
  return (
    <div>
    <div className=" bg-blue-500  fixed z-10 top-0 w-full py-2">
        <div className="md:hidden flex justify-between items-center px-5">
            <div className="text-2xl font-bold text-white" onClick={() => hanldeCLick()}>
             {open? <RxCross1  /> : <IoMenu/>}
            </div>
        <div className="h-16 w-16 bg-white rounded-full ">
          <img src={logo} alt=" " className="w-full h-full object-cover" />
        </div> 
        <div className="text-2xl font-bold text-white">
            <FaUser />
        </div>
        </div>
      <div className="container mx-auto md:flex justify-between items-center hidden   ">
        <div className="h-20 w-20 bg-white rounded-full ">
          <img src={logo} alt=" " className="w-full h-full object-cover" />
        </div>
        <div>
           
                <ul className="flex flex-row space-x-8">
                {MenuList.map((menu) =>(
                <li className="text-white font-sans font-semibold hover:text-black hover:font-bold ">{menu.name}</li>
            ))}
              </ul>
          
            
        </div>
        <div className="flex space-x-2 items-center">
            <FaUser className="text-white font-sans font-semibold text-2xl" />
            <button className="text-blue-500 bg-white font-bold px-4 py-2 rounded-md">Login</button>
        </div>
      </div>
    </div>
    {open && (
        <div className="fixed top-14 left-0 w-[100%] h-auto bg-blue-100 block md:hidden py-8">
            
                <ul className="flex flex-col items-center ">
                    {MenuList.map((menu) =>(
                        <div className="border-b-[1px] border-gray-600 w-full  ">
                        <li className=" px-4 w-full mt-3 font-sans font-semibold text-black hover:font-bold ">{menu.name}</li>
                        </div> 
                    ))}
                </ul>
     
        </div>
    )}
    </div>
  );
};

export default Menu;
