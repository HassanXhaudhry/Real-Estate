import React, { Fragment } from "react";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";


const Pricing = () => {
  const Plan = [
    {
      id: 1,
      icon: <MdOutlineMoneyOffCsred/>,
      type: 'Basic',
      description: 'Advertising a business to online include Having services',
      fee: '$20',
      offers: 'Examine traditional yoga <br/> Learn meditaions <br/> Connect energetics <br/> Become a yoga Alliance',
      button: 'Enroll Now',
    },
    {
      id: 2,
      icon: <FaCrown/>,
      type: 'Gold',
      description: 'Advertising a business to online include Having services',
      fee: '$30',
      offers: 'Examine traditional yoga <br/> Learn meditaions <br/> Connect energetics <br/> Become a yoga Alliance',
      button: 'Enroll Now',
    },
    {
      id: 3,
      icon: <IoDiamond/>,
      type: 'Diamond',
      description: 'Advertising a business to online include Having services',
      fee: '$50',
      offers: 'Examine traditional yoga <br/> Learn meditaions <br/> Connect energetics <br/> Become a yoga Alliance',
      button: 'Enroll Now',
    }
  ];
  return (
    <Fragment>
      <div className="bg-silver w-full h-auto my-10 pb-8" id="pricing">
        <h1 className="text-center font-bold text-3xl pt-8">
          Pricinng Plan For Real Estate
        </h1>
        <div className="relative mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-8/9 mx-auto gap-2 md:align-middle md:items-center ">
          {Plan.map((plan)=>(
            <div key={plan.id} className="bg-white px-4 py-6 md:w-[300px] mx-auto transition-all duration-300 h-auto rounded-lg hover:-translate-y-6 hover:border-b-4 hover:border-lightblack">
            <div className="w-10 h-10 bg-darksilver rounded-full mx-auto flex items-center justify-center mb-6">{plan.icon}</div>
            <h1 className="font-bold text-xl my-2 ">{plan.type}</h1>
            <p className="text-sm pb-2 text-lightblack">{plan.description}</p>
            <h1 className="text-3xl font-bold my-3 ">{plan.fee}</h1>
            <p className="text-sm mt-8"
                dangerouslySetInnerHTML={{ __html: plan.offers }}></p>
            <div className="w-52 h-10 py-2 px-2 bg-black hover:bg-darksilver cursor-pointer hover:text-black text-white rounded-md mt-6 text-center mx-auto flex items-center justify-center">{plan.button}</div>
            </div>
          ))}
          
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
