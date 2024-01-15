import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
    let Links =[
        {name:"Services",link:"/"},
        {name:"Projects",link:"/"},
        {name:"About",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 font-Montserrat bg-gray-500'>
           <div className='md:flex items-center justify-between bg-lightgray py-4 md:px-7 px-7 '>
            {/* logo section */}
            <div className='font-bold text-1.8xl cursor-pointer flex items-center'>
            <IoHomeOutline className='w-7 h-6 text-black-400'/> &nbsp;
                <span className='text-white'>Real Estate</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
         
           <div className="flex justify-center items-center">
           <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
           {
               Links.map((link) => (
               <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                   <a href={link.link} className='text-gray-800 hover:text-white duration-500'>{link.name}</a>
               </li>))
           }
       </ul>
        </div>
        <span className={`md:flex md:items-center md:pb-0 fixed md:static  md:z-auto z-[-1] left-2 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'bottom-80' : 'top-[-490px]'}`}>
        <button className='btn bg-white border-2 border-gray-200 text-black hover:text-white hover:bg-black duration-500 text-base px-2 py-1 rounded-3xl duration-500 md:static absolute transform -translate-x-1/2 md:translate-x-0'>
        Get Started
    </button>
    </span>
           
        </div>
        </div>
    );
};

export default Navbar;