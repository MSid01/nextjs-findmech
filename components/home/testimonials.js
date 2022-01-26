import React from 'react';
import Image from 'next/image';
import avatar1 from "../../public/avatar1.png";
import avatar2 from "../../public/avatar2.png";
import avatar3 from "../../public/avatar3.png";
function Testimonials() {
  return <div className="w-full flex flex-wrap flex-col md:flex-row gap-16 mb-8 md:mb-0 flex-between items-center justify-center p-8 py-16">
  <div className="bg-gray-700 w-72 shadow-lg rounded-xl p-4">
      <p className="text-white">
          <span className="font-bold text-red-500 text-lg">
              “
          </span>
          To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
          <span className="font-bold text-red-500 text-lg">
              ”
          </span>
      </p>
      <div className="flex items-center mt-4">
          <a href="#" className="block relative">
              <Image alt="profil" src={avatar1} width={40} height={40} className="mx-auto object-cover rounded-full"/>
          </a>
          <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-red-500 text-sm">
                  Akashdeep Gupta
              </span>
              <span className="text-gray-100 text-xs flex items-center">
                  User of FindMech
              </span>
          </div>
      </div>
  </div>
  <div className="bg-gray-700 w-72 shadow-lg rounded-xl p-4">
      <p className="text-white">
          <span className="font-bold text-red-500 text-lg">
              “
          </span>
          To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
          <span className="font-bold text-red-500 text-lg">
              ”
          </span>
      </p>
      <div className="flex items-center mt-4">
          <a href="#" className="block relative">
              <Image alt="profil" src={avatar2} width={40} height={40} className="mx-auto object-cover rounded-full"/>
          </a>
          <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-red-500 text-sm">
                  Pratham Mandavkar
              </span>
              <span className="text-gray-100 text-xs flex items-center">
                  User of FindMech
              </span>
          </div>
      </div>
  </div>
  <div className="bg-gray-700 w-72 shadow-lg rounded-xl p-4">
      <p className="text-white">
          <span className="font-bold text-red-500 text-lg">
              “
          </span>
          To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
          <span className="font-bold text-red-500 text-lg">
              ”
          </span>
      </p>
      <div className="flex items-center mt-4">
          <a href="#" className="block relative">
              <Image alt="profil" src={avatar3} width={40} height={40} className="mx-auto object-cover rounded-full"/>
          </a>
          <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-red-500 text-sm">
                  Om kenjale
              </span>
              <span className="text-gray-100 text-xs flex items-center">
                  User of FindMech
                  {/* <img src="/icons/rocket.svg" className="ml-2 h-4 w-4"/> */}
              </span>
          </div>
      </div>
  </div>
</div>;
}

export default Testimonials;
