import { useState } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

function faq() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className="h-auto w-full mb-6" id="faq">
      <div className="text-center mb-5 pt-4 text-black text-3xl font-bold">
        <h1>Frequently Asked<br />Questions</h1>
      </div>
      <div className="w-full md:w-[500px] mx-auto bg-silver p-4 md:p-8">
        {[
          { open: open1, setOpen: setOpen1, question: 'What does the free trial include?', answer: 'During the 14 days of the free trial, you can add unlimited Actions Logs, Snapshots & Metrics to up to 20 concurrently running SDKs, using up to 10 developers seats.' },
          { open: open2, setOpen: setOpen2, question: 'Do you charge per developer seat or per SDK?', answer: 'Lightrun charges per developer every developer seat comes with 10 concurrently running SDKs, which directly translate into running application instances (running JVMs, V8s, Python interpreters, etc…).' },
          { open: open3, setOpen: setOpen3, question: 'Do I need a credit card to get started?', answer: 'No! You can get started with a Lightrun 14-day free trial any time, no credit card required.' },
          { open: open4, setOpen: setOpen4, question: 'Can I book a deal online?', answer: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' },
          { open: open5, setOpen: setOpen5, question: 'Can I buy a house with bad credit?', answer: 'The best home loan option for you if you have bad credit depends on how low your score is. If your score is below 600, you probably should look into an FHA loan.' },
        ].map((section, index) => (
          <div key={index} className="relative before:content-[''] before:block before:h-4 after:h-auto before:border-solid mb-4">
            <div className="h-2 px-4">
              <span className={`md:w-[300px] sm:w-2/3 ${section.open ? 'font-bold' : ''}`}>
                {section.question}
              </span>
              <div className="cursor-pointer float-right inline-block" onClick={() => { section.setOpen(!section.open); }}>
                {section.open ? <FiArrowUp /> : <FiArrowDown />}
              </div>
            </div>
            <div
              className={`px-5 md:px-10 py-5 ${section.open ? "bg-darksilver mt-4 opacity-100 visible translate-y-0 transition-transform duration-2000 ease-out" : "opacity-0 invisible -translate-y-5 transition-transform duration-2000 ease-in overflow-hidden h-0"}`}
            >
              {section.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default faq;
