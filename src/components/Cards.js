import React from "react";
import ImageOne from "../images/hero-bg.png";
import ImageTwo from "../images/tab-2.png";
import ImageThree from "../images/tab-3.png";

const Cards = () => {
  return (
    <section className="py-10 mt-10 px-14 md:px-20 lg:px-40">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">Cards</h1>
        <p className="text-center text-bookmark-grey mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {/* All Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 justify-items-center">
        {/* card-1 */}
        <div className="py-10">
          <div className="rounded-xl overflow-hidden shadow-md max-w-sm cursor-pointer hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
            <img src={ImageOne} className="w-full h-48 object-cover" />
            <div className="px-6 py-3">
              <div className="font-bold text-xl mb-2">Lorem</div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                malesuada, arcu et finibus commodo, risus lacus iaculis velit,
                quis pulvinar neque odio in nibh.
              </p>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="py-10">
          <div className="rounded-xl overflow-hidden shadow-md max-w-sm cursor-pointer hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
            <img src={ImageTwo} className="w-full h-48 object-cover" />
            <div className="px-6 py-3">
              <div className="font-bold text-xl mb-2">Lorem</div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                malesuada, arcu et finibus commodo, risus lacus iaculis velit,
                quis pulvinar neque odio in nibh.
              </p>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="py-10">
          <div className="rounded-xl overflow-hidden shadow-md max-w-sm cursor-pointer hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
            <img src={ImageThree} className="w-full h-48 object-cover" />
            <div className="px-6 py-3">
              <div className="font-bold text-xl mb-2">Lorem</div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                malesuada, arcu et finibus commodo, risus lacus iaculis velit,
                quis pulvinar neque odio in nibh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
