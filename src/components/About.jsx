import React, { Fragment } from "react";
import home2 from '../assets/home2.jpg'
import question from '../assets/question.png'
import qoute from '../assets/qoute.png'
import register from '../assets/register.png'

const About = () => {
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
            "Congratulations! <br/> You completed these steps, and we feel it so good",
          image: register,
        },
      ];
  return (
    <Fragment>
      <div
        className=" font-Montserrat md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-silver"
        id="about"
      >
        <div className="mt-16 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-gray font-semibold mb-2">
            Everything should be this easy
          </h2>
          <p className="text-lg text-gray py-5">Three steps, Three minutes.</p>
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
                <p
                  className="text-sm text-gray"
                  dangerouslySetInnerHTML={{ __html: services.description }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-silver flex flex-col md:flex-row my-8 py-8 items-center justify-center">
        <div className="flex-1 text-center justify-center font-Montserrat md:w-1/2 md:mx-4 h-auto w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Evaluate your property with Real Estate, <br /> Where desire meets
            passion
          </h1>
          <p className="my-4 md:my-6 text-sm md:text-base lg:text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>

        <div className="md:w-60 sm:mx-4 md:mx-12 mt-4 md:mt-0">
  <img
    className="w-full h-[235px] rounded-full"
    src={home2}
    alt=""
  />
</div>

      

      </div>
    </Fragment>
  );
};

export default About;
