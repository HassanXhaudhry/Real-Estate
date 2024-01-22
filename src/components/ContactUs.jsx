import React, { Fragment } from 'react'
import person from "../assets/person.png";
import {motion} from "framer-motion";

const ContactUs = () => {
    const transition={type:"spring", duration:2}
    const mobile=window.innerWidth<=768? true: false;
  return (
    <Fragment>
    <div className=' h-auto bg-silver flex flex-col items-center md:flex-row my-6 justify-center'>
    <div className=' pt-12 px-8 md:w-[600px]'>
    <h1 className='m-6 font-bold text-lg '>Let's contact us and make the best deal</h1>
    <p className='m-6 text-lightblack '>It is a long established fact that a reader will be distracted by
    the readable content of a page when looking at its layout. The point
    of using Lorem Ipsum </p>
    <span className='flex align-middle justify-center'>
    <button className="mb-8 bg-lightblack border-2 border-none  text-white hover:bg-black h-10 w-28  text-2sm rounded-3xl ">Contact Us</button>
    </span>
    </div>
    <div className="md:pl-6 md:pt-0 md:pr-0 md:pb-48">
    <motion.div className='items-start absolute bg-silver'
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
    >
        <img
            src={person}
            alt=""
            className="w-52 h-52 hidden md:block"
        />
    </motion.div>
</div>

    </div>
    </Fragment>
  )
}

export default ContactUs
