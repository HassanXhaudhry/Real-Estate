import React, { Fragment } from 'react'
import house from '../assets/house.png'
import question from '../assets/question.png'
import qoute from '../assets/qoute.png'
import register from '../assets/register.png'

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Answer Questions",
      description:
        "Getting insured is as easy as answering a few short questions about your home",
      image: question,
    },
    {
      id: 2,
      title: "Select a qoute",
      description:
        "Choose your qoute and apply online. No hustle, no paperwork, no application fee",
      image: qoute,
    },
    {
      id: 3,
      title: "Get registered",
      description:
        "Congratulations! <br/> You completed these steps, and it we feel so good",
      image: register,
    },
  ];

  return (
    <Fragment>
  <div className='font-Montserrat h-auto pb-12 pr-4 m-2 mt-24 rounded-lg bg-gradient-to-r from-blue-200 to-orange-200 flex flex-col items-center md:flex-row'>
    <div className='flex-1 pt-20 pl-8'>
        <p className='text-lg'>Welcome to Real Estate</p>
        <h1 className='text-6xl'>Manage Your <br />Property</h1>
        <p className='my-4'>You will have everthing nearby supermarket, house, building, etc.</p>

  <div class="relative flex w-full max-w-[22rem] mt-8 border rounded-3xl">
      <div class="relative h-10 w-full ">
      <input
      class="peer w-full h-full bg-transparent font-normal outline outline-0 focus:outline-0 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-3xl bg-white"
      placeholder="Enter your email" />
     </div>
  <button
    disabled
    class="absolute right-1 top-1 rounded-2xl bg-black py-2 px-4 text-center align-middle text-xs cursor-pointer text-white"
    type="button">
    Get Advice
  </button>
 </div>

  </div>
    <div className='md:pl-8 md:pt-0 md:pb-12 md:pr-0'>
        <img src={house} alt="" className='w-full h-auto rounded-r-lg md:block md-hidden' />
    </div>
</div>

<div className=" font-Montserrat md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-silver" id="services">
<div className="mt-16 md:w1/2 mx-auto text-center">
        <h2 className="text-4xl text-gray font-semibold mb-2">
          Everything should be this easy
        </h2>
        <p className="text-lg text-gray py-5">
          Three steps, Three minutes.
        </p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((services) => (
          <div
            key={services.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="mb-4 h-14 w-16 mx-auto">
                <img src={services.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-gray mb-2 px-2">
                {services.title}
              </h4>
              <p className="text-sm text-gray" dangerouslySetInnerHTML={{ __html: services.description }}></p>
            </div>
          </div>
        ))}
      </div>
</div>

</Fragment>
  )
}

export default Home
