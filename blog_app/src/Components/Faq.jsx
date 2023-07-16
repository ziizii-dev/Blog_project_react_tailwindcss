import React from "react";
import faqimg from "../assets/images/faq.png";
import { useState } from "react";
import { BsDashCircleFill, BsPlusCircleFill } from "react-icons/bs";

const Faq = () => {
    const [isOpen, setIsOpen] = useState();
  const toggleOpenClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  let Faqs = [
    {
      question: "Is lunch provided for free course ?",
      answer:
        "Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.",
    },
    
  ];

  
  return (
    <div>
      <div className="grid grid-cols-2 mx-8 my-8 mt-40 gap-8">
        <div className="mx-40">
          <img src={faqimg} alt="" className="w-[600px] max-h-fit " />
        </div>
        <div className="">
          <h3 className="text-indigo-700 font-bold">FAQs</h3>
          <p className="text-4xl font-bold mt-6 mb-6">
            Do you have <span className="text-indigo-800">Questions ?</span>{" "}
          </p>
          <p className="opacity-80">
            Here are some frequently asked questions about our hotels from our
            loving customers. Should you have any other questions, feel free to
            reach out via the contact form below.
          </p>
          <div class="max-w-lg mx-auto p-8">

            <div className=" items-center">

                {/* pppppp */}
                <ul className=' px-0 mt-6 mb-6'>
               {Faqs.map((data) => (
                  <li key={data.question} className="md:mr-4 text-xl font-bold">
                   {/*......... button click Q&A section start ........*/}
            <div>
                <div
                  onClick={toggleOpenClose}
                  className={` border-none text-dark font-bold`}
                >
                  <div className="flex gap-2 items-center cursor-pointer delay-300">
                    <div>{data.question} </div>
                    <div>
                     {/*..... icons section..... */}
                      {isOpen ? (
                        <BsDashCircleFill className="text-2xl text-indigo-700 delay-300" />
                      ) : (
                        <BsPlusCircleFill className="text-2xl text-indigo-700 delay-500" />
                      )}
                    </div>
                  </div>
                  {isOpen && (
                    <div className=" opacity-60 p-0 mt-2 text-sm rounded-b cursor-pointer delay-300">
                     
                      <p>{data.answer} </p>
                    </div>
                  )}
                </div>
              </div>
              {/*...... Button click sectionn end...... */}
                   </li> 
                    ))}
                </ul>
                {/* ppppp */}

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
