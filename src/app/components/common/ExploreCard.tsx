import React from "react";

type ExploreCardProps = {
  item: {
    title: string;
    description: string;
    image: string;
    linkText: string;
    link: string;
  };
  idx: number;
};

const ExploreCard: React.FC<ExploreCardProps> = ({ item, idx }) => {
  return (
    <>
      <div
        key={idx}
        className="bg-white flex flex-col justify-between rounded-xl shadow-md w-[350px] h-[420px] p-5 hover:shadow-lg transition"
      >
        <div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[180px] object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{item.description}</p>
        </div>
        <div>
          <a
            href={item.link}
            className="text-blue-600 mt-auto font-semibold text-sm hover:underline"
          >
            {item.linkText}
          </a>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
