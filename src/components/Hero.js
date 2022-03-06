import React from "react";
import TreeImage from "../images/tree-hero.jpg";
import HeroBg from "../images/hero-bg.png";

const Hero = () => {
  return (
    <div>
      {/* <div className="bg-black top-0 left-0 opacity-90 h-96 w-full relative">
        <img src={TreeImage} className="w-full h-full object-cover absolute" />
        <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-6xl font-bold">
            This is the Headline
          </h1>
          <h2 className="text-white sm:text-xl md:text-3xl font-light mt-2 md:mt-5">
            Some really great stuff goes here.
          </h2>
        </div>
      </div> */}

      <section className="relative px-14 md:px-20 lg:px-40">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Lorem Ipsum is simply dummy.
            </h2>
            <p className="text-bookmark-gray text-lg text-center lg:text-left mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={HeroBg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
