import React, { Fragment } from 'react';
import { data } from '../../mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Slider = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <Fragment>
    <div className='ml-8 my-6'>
    <h4 className='text-lg'>Our trending blogs</h4>
    <h1 className='text-5xl '>Read our latest blogs</h1>
    <div className='flex items-center justify-center my-4'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
      <div className='relative flex items-center '>
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
              key={item.id} 
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Slider;
