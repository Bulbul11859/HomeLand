import React from "react";
import RegiImg from "../assets/img/houses/register.jpg";

const Registration = () => {
  return (
    <section className="mt-[-48px]">
      <div className="flex justify-between">
        <div className="w-full  flex flex-col  items-end  text-regal-blue ">
          <div className="w-10/12 text-bb mt-10">
            <h2 className="text-xl lg:text-2xl mb-2">
              Get started with easily register
            </h2>
            <h3 className="text-left text-gray-600">
              Free register and you can enjoy it
            </h3>

            <div className="w-10/12 lg:w-3/4">
              <div className="relative">
                <input
                  type="email"
                  className="border border-solid border-black w-full rounded-lg text-black 2xl:text-2xl px-6 lg:px-14 py-4 sml:py-6 lg:py-5 2xl:py-8  mt-9 focus:outline-none focus:ring focus:ring-violet-300"
                />

                <div className="absolute bg-white top-6 left-11 px-4">
                  Email Address
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="border border-solid border-black w-full rounded-lg text-black 2xl:text-2xl px-6 lg:px-14 py-4 sml:py-6 lg:py-5 2xl:py-8  mt-9 focus:outline-none focus:ring focus:ring-violet-300"
                />

                <div className="absolute bg-white top-6 left-11 px-4">
                  First Name
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  className="border border-solid border-black w-full rounded-lg text-black 2xl:text-2xl px-6 lg:px-14 py-4 sml:py-6 lg:py-5 2xl:py-8  mt-9 focus:outline-none focus:ring focus:ring-violet-300"
                />

                <div className="absolute bg-white top-6 left-11 px-4">
                 Password
                </div>
              </div>

              <button
              className="hover:bg-primary  bg-sky-700 w-full py-3 sml:py-5 rounded-[86px] text-white text-base lg:text-xl font-semibold mt-9	"
            >
              Save Change
            </button>
              
            </div>
          </div>
        </div>
        <div className="lg:h-screen lg:w-full lg:block hidden">
          <img src={RegiImg} className="h-screen w-full object-center	" />
        </div>
      </div>
    </section>
  );
};

export default Registration;
