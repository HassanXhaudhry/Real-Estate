import React, { Fragment, useEffect, useState } from 'react'
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const Faq = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [style, setStyle]= useState("black");

  const click = (style) => {
    setStyle(style);
  }
  
  useEffect(() => {
    document.body.style.color = style;
  }, [style]);
  
  return (
    <Fragment>
    <div className="h-auto w-full mb-6" id='faq'>
    <div className="text-center mb-5 pt-4 text-black text-3xl font-bold">
              <h1>Frequently Asked<br/>Questions</h1>
            </div>
          <div className="w-[500px] mx-auto bg-silver ">
              <div className="relative before:content-[''] before:block before:h-4 after:h-auto  before:border-solid ">
                <div className="h-2 px-5" onClick={()=>click("blue")}>
                  What does the free trial include?
                  <div className="cursor-pointer float-right pt-1" onClick={() => { setOpen1(!open1); }} >
                    {open1 ? <FiArrowUp /> : <FiArrowDown />}
                  </div>
                </div>
                <div
                  className={`px-10 py-5 ${open1 ? "bg-darksilver mt-4 opacity-100 visible translate-y-0 transition-transform duration-2000 ease-out" : "opacity-0 invisible -translate-y-5 transition-transform duration-2000 ease-in overflow-hidden h-0 "}`}
                >
                  During the 14 days of the free trial, you can add unlimited
                  Actions Logs, Snapshots & Metrics to up to 20 concurrently
                  running SDKs, using up to 10 developers seats.
                </div>
              </div>

              <div className="relative before:content-[''] before:block before:h-4 after:h-auto before:border-solid">
                <div className="h-2 px-5">
                  Do you charge per developer seat or per SDK?
                  <div className="cursor-pointer float-right pt-1.5" onClick={() => { setOpen2(!open2); }} >
                  {open2 ? <FiArrowUp /> : <FiArrowDown />}
                </div>
                </div>
                <div
                  className={`px-10 py-5 ${open2 ? "bg-darksilver mt-4 opacity-100 visible translate-y-0 transition-transform duration-2000 ease-out" : "opacity-0 invisible -translate-y-5 transition-transform duration-2000 ease-in overflow-hidden h-0"}`}
                >
                  Lightrun charges per developer every developer seat comes with
                  10 concurrently running SDKs, which directly translate into
                  running application instances (running JVMs, V8s, Python
                  interpreters, etc…).
                </div>
              </div>

              <div className="relative before:content-[''] before:block before:h-4 after:h-auto before:border-solid">
                <div className="h-2 px-5">
                  Do I need a credit card to get started?
                  <div className="cursor-pointer float-right pt-1" onClick={() => { setOpen3(!open3); }} >
                    {open3 ? <FiArrowUp /> : <FiArrowDown />}
                  </div>
                </div>
                <div
                  className={`px-10 py-5 ${open3 ? "bg-darksilver mt-4 opacity-100 visible translate-y-0 transition-transform duration-2000 ease-out" : "opacity-0 invisible -translate-y-5 transition-transform duration-2000 ease-in overflow-hidden h-0"}`}
                >
                  No! You can get started with a Lightrun 14-day free trial any
                  time, no credit card required.
                </div>
              </div>
              <div className="relative before:content-[''] before:block before:h-4 after:h-auto before:border-solid">
                <div className="h-2 px-5">
                  Can I book a deal online?
                  <div className="cursor-pointer float-right pt-1" onClick={() => { setOpen4(!open4); }} >
                    {open4 ? <FiArrowUp /> : <FiArrowDown />}
                  </div>
                </div>
                <div
                  className={`px-10 py-5 ${open4 ? "bg-darksilver mt-4 opacity-100 visible translate-y-0 transition-transform duration-2000 ease-out" : "opacity-0 invisible -translate-y-5 transition-transform duration-2000 ease-in overflow-hidden h-0"}`}
                >
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                used to demonstrate the visual form of a document or 
                a typeface without relying on meaningful content.
                </div>
              </div>
              <div className="relative before:content-[''] before:block before:h-4 after:h-auto before:border-solid">
                <div className="h-2 px-5">
                Can I buy a house with bad credit?
                  <div className="cursor-pointer float-right pt-1" onClick={() => { setOpen5(!open5); }} >
                    {open5 ? <FiArrowUp /> : <FiArrowDown />}
                  </div>
                </div>
                <div
                  className={`px-10 py-5 ${open5 ? "bg-darksilver mt-4 opacity-100 visible translate-y-0 transition-transform duration-2000 ease-out" : "opacity-0 invisible -translate-y-5 transition-transform duration-2000 ease-in overflow-hidden h-0"}`}
                >
                The best home loan option for you if you have bad credit depends
                 on how low your score is. If your score is below 600, you probably should look into an FHA loan 
                </div>
              </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Faq
