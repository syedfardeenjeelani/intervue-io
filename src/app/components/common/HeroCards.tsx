import React from "react";

interface HeroCardProps {
  difficulty: string;
  difficultyColor: string; 
  category: string;
  title: string;
  description: string;
}

const HeroCards: React.FC<HeroCardProps> = ({
  difficulty,
  difficultyColor,
  category,
  title,
  description,
}) => {
  return (
    <div className="w-[400px] p-[16px] sm:h-[210px] border rounded-[12px] border-[#b1b0b0]">
      <div className="flex md:flex-row flex-col gap-[10px] md:gap-[20px] md:items-center">
        <span
          className={`${
            difficulty === "Medium" ? " w-[90px] sm:w-[78px]" : "w-[58px]"
          } flex items-center justify-center h-[22px] p-2 rounded-[4px] text-white ${difficultyColor}`}
        >
          {difficulty}
        </span>
        <span className="text-[14px] text-[#6d6d6d]">{category}</span>
      </div>
      <div className="mt-[24px] flex flex-col gap-[10px]">
        <span className="font-semibold">{title}</span>
        <span className="text-[14px] text-[#6d6d6d]">{description}</span>
      </div>
    </div>
  );
};

export default HeroCards;
