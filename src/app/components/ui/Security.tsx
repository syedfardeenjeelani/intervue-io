import React from 'react'
import SecurityCard from '../common/SecurityCard';
import SecurityCardData from '@/data/Security.json';
const Security = () => {
    
  return (
    <div className="bg-[#F5F5F5] xl:h-[60vh] p-[30px] xl:p-0 flex items-center  ">
      <div className="w-[86vw] mx-auto ">
        <div className="flex flex-col gap-[16px]">
          <span className="text-[24px]">Security is our top priority</span>
          <span className="text-[#6d6d6d] leading-[25px]">
            Intervue serves startups to forturn 500 companies with <br />{" "}
            enterprize grade Security baked in by desing
          </span>
        </div>
        {/* ///// */}
        <div className="flex flex-wrap md:justify-center xl:justify-start  mt-[60px] gap-[30px]">
          <div className="flex flex-wrap  md:justify-center gap-[30px]">
            {SecurityCardData.slice(0, 2).map((card, idx) => (
              <SecurityCard key={idx} {...card} />
            ))}
          </div>
          <div className="flex flex-col flex-wrap  md:items-center gap-[18px]">
            {SecurityCardData.slice(2, 4).map((card, idx) => (
              <SecurityCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security