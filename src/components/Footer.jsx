import React from "react";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT} from "../../mockData";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const Item = ({ Links, title }) => {
        return (
          <ul>
            <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((link) => (
                <div key={link.name}>
                <h2 >{link.pro}</h2>
                <li >
                <a
                  className="text-black -400 hover:underline duration-300
                text-sm cursor-pointer leading-6"
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
                </div>
              
            ))}
          </ul>
        );
      };
      
  return (
    <footer className="bg-silver text-black text-center">
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 ">
      <Item Links={PRODUCTS} title="Real Estate" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 
      text-center pt-2  text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex space-x-1 justify-center md:justify-start">
          <div className="p-2 cursor-pointer rounded-full bg-white text-xl hover:text-gray-100 hover:bg-black duration-300">
            <FaFacebook />
          </div>
          <div className="p-2 cursor-pointer rounded-full bg-white text-xl hover:text-gray-100 hover:bg-black duration-300">
            <FaInstagram />
          </div>
          <div className="p-2 cursor-pointer rounded-full bg-white text-xl hover:text-gray-100 hover:bg-black duration-300">
            <FaXTwitter />
          </div>
          <div className="p-2 cursor-pointer rounded-full bg-white text-xl hover:text-gray-100 hover:bg-black duration-300">
            <FaGithub />
          </div>
          <div className="p-2 cursor-pointer rounded-full bg-white text-xl hover:text-gray-100 hover:bg-black duration-300">
            <FaLinkedin />
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;