import React from 'react'
import HeroCards from '../common/HeroCards';
import data from '@/data/cards.json'

const Hero = () => {
  return (
    <>
      <div className="flex justify-center   h-[50vh] items-center flex-col gap-2.5">
        <h1 className="sm:text-[30px] text-[28px] text-center  ">
          Technical Interview Resources
        </h1>
        <span className="text-[#6d6d6d] text-[14px] sm:text-[16px] text-center ">
          Find all the technical resources here
        </span>
        <div className="md:w-[40vw] sm:w-[400px] w-[350px] h-[45px] mt-[20px] items-center rounded-[36px] flex justify-end bg-[#F5F5F5] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#6d6d6d"
            className="size-5 ml-[20px] mr-[10px] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            className="z-10 md:w-[38vw] w-[300px] sm:w-[350px] outline-none"
            type="text"
            placeholder="Search for resources here"
          />
        </div>
      </div>
      <div className="w-[86vw] flex flex-wrap justify-center gap-[55px] mx-auto">
        {data.map((card, idx) => (
          <HeroCards key={idx} {...card} />
        ))}
      </div>
    </>
  );
}

export default Hero