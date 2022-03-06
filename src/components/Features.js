import React from "react";
import ImageOne from "../images/hero-bg.png";
import ImageTwo from "../images/tab-2.png";
import ImageThree from "../images/tab-3.png";

const Features = () => {
  return (
    <section className="bg-gray-100 py-14 mt-10 lg:mt-36 px-14 md:px-20 lg:px-40">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>
        <p className="text-center text-grey mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* Feature #1 */}
      <div class="relative mt-24 lg:mt-20">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={ImageOne}
              alt=""
            />
          </div>

          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">lorem ipsum dolor.</h1>
            <p class="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              malesuada, arcu et finibus commodo, risus lacus iaculis velit,
              quis pulvinar neque odio in nibh. Curabitur ipsum massa, convallis
              sit amet felis molestie, facilisis interdum leo.
            </p>
            {/* <button
              type="button"
              class="btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              More Info
            </button> */}
          </div>
        </div>
      </div>

      {/* Feature #2 */}
      <div class="relative mt-24 lg:mt-40">
        <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={ImageTwo}
              alt=""
            />
          </div>

          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">lorem ipsum dolor.</h1>
            <p class="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              malesuada, arcu et finibus commodo, risus lacus iaculis velit,
              quis pulvinar neque odio in nibh. Curabitur ipsum massa, convallis
              sit amet felis molestie, facilisis interdum leo.
            </p>
            {/* <button
              type="button"
              class="btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              More Info
            </button> */}
          </div>
        </div>
      </div>

      {/* Feature #3 */}
      <div class="relative mt-24 lg:mt-40">
        <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={ImageThree}
              alt=""
            />
          </div>

          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h1 class="text-3xl text-bookmark-blue">lorem ipsum dolor.</h1>
            <p class="text-gray-600 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              malesuada, arcu et finibus commodo, risus lacus iaculis velit,
              quis pulvinar neque odio in nibh. Curabitur ipsum massa, convallis
              sit amet felis molestie, facilisis interdum leo.
            </p>
            {/* <button
              type="button"
              class="btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              More Info
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
