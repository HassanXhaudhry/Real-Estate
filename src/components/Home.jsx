import React, { Fragment } from 'react'
import house from '../assets/house.png'

const Home = () => {
  return (
    <Fragment>
    
      <div className="font-Montserrat h-auto pb-12 pr-4 m-2 mt-2 rounded-lg bg-gradient-to-r from-blue-200 to-orange-200 flex flex-col items-center md:flex-row">
     
        <div className="flex-1 pt-20 px-8">
          <p className="text-lg">Welcome to Real Estate</p>
          <h1 className="text-6xl">
            Manage Your <br />
            Property
          </h1>
          <p className="my-4 ">
            You will have everthing nearby supermarket, house, building, etc.
          </p>

          <div class="relative flex w-full max-w-[22rem] mt-8 border rounded-3xl">
            <div class="relative h-10 w-full ">
              <input
                class="peer w-full h-full bg-transparent font-normal outline outline-0 focus:outline-0 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-3xl bg-white"
                placeholder="Enter your email"
              />
            </div>
            <button
              disabled
              class="absolute right-1 top-1 rounded-2xl bg-black py-2 px-4 text-center align-middle text-xs cursor-pointer text-white"
              type="button"
            >
              Get Advice
            </button>
          </div>
        </div>
        <div className="md:pl-8 md:pt-0 md:pb-12 md:pr-0">
          <img
            src={house}
            alt=""
            className="w-full h-auto rounded-r-lg md:block md-hidden"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Home


