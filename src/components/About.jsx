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
        className="efont-Montserrat md:px-14 px-4 py-8 max-w-screen-2xl mx-auto bg-silver"
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
              className="px-4 py-6 text-center md:w-[300px] mx-auto md:h-80 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="mb-4 h-14 w-16 mx-auto">
                  <img src={services.image} alt="" />
                </div>
                <h4 className="text-2xl font-bold text-gray mb-2 px-2">
                  {services.title}
                </h4>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: services.description }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default About;
