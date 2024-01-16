import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { IoHomeOutline } from "react-icons/io5";

const jkh = () => {
    let Links =[
        {name:"Services",link:"/"},
        {name:"Projects",link:"/"},
        {name:"About",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div class='shadow-md sticky font-Montserrat bg-gray-300 m-2 rounded-lg '>
    <div class='md:flex items-center justify-between bg-lightgray py-4 md:px-7 px-7'>
       
        <div class='font-bold text-lg cursor-pointer flex items-center'>
            <IoHomeOutline class='w-8 h-6 text-black-500'/> &nbsp; &nbsp;
            <span class='text-white'>Real Estate</span>
        </div>

        <div onClick={() => setOpen(!open)} class='absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
            <div class="">
            <div class={`md:flex md:items-center md:pb-0 pb-12 absolute md:sticky md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
    <ul class='md:flex md:items-center my-7 font-semibold'>
        {Links.map((link) => (
            <li class='mr-4 md:mr-8'>
                <a href={link.link} class='text-gray-800 hover:text-white duration-500'>{link.name}</a>
            </li>
        ))}
    </ul>
    <button class='btn bg-white border-2 border-gray-200 text-black hover:text-white hover:bg-black duration-500 text-base px-8 md:px-10 rounded-3xl duration-500 transform -translate-x-1/2 md:translate-x-0'>
        Get Started
    </button>
</div>

        </div>
        </div>
        
    </div>
</div>

    );
};

export default jkh;