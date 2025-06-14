import React from "react";
import ExploreCard from "../common/ExploreCard";
import data from "@/data/Explore.json";

const Explore = () => {
  return (
    <div className="lg:h-[90vh] lg:mb-[0] mb-[40px] mt-[30px]">
      <div className="flex  items-center flex-col gap-[55px] ">
        <span  className="sm:text-[34px] text-[26px] text-center lg:text-left " >Explore more products on intervue</span>
        <div className="flex flex-wrap justify-center gap-[30px]"> 
          {data.map((el, index) => {
            return <ExploreCard key={index} item={el} idx={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
