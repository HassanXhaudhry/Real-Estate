import React, { Fragment } from 'react';
import { data } from '../../mockData';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 220;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 220;
  };

  return (
    <Fragment>
    <div className='ml-8 my-6'>
      <h4 className='text-lg'>Our trending blogs</h4>
      <h1 className='text-5xl '>Read our latest blogs</h1>
      <div className='flex items-center justify-center mt-4 h-10 w-24 pr-1 pl-1 rounded-full bg-darksilver mx-auto'>
    <span className='flex gap-4'>
        <FaArrowAltCircleLeft className='opacity-50 cursor-pointer hover:opacity-100 h-8 w-8' onClick={slideLeft} />
        <FaArrowAltCircleRight className='opacity-50 cursor-pointer hover:opacity-100 h-8 w-8' onClick={slideRight} />
    </span>
</div>

<div
    id='slider'
    className='flex relative w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide py-6 '
>
    {data.map((item) => (
        <div key={item.id} className='flex-shrink-0 mx-auto md:h-80 text-center items-center justify-center h-full bg-silver '>
            <img
                className='w-[220px] h-52 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                src={item.img}
                alt='/'
            />
            <h4 className="text-2xl  text-gray px-2">
            {item.title}
          </h4>
          <p className="text-sm text-gray py-2" dangerouslySetInnerHTML={{ __html: item.description }}>
          </p>
        </div>
    ))}
</div>


    </div>
    </Fragment>
  );
};

export default Slider;
