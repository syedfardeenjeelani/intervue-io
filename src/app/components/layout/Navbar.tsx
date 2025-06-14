import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-[86vw] h-[80px] items-center  mx-auto flex justify-between">
        <div className="cursor-pointer">
          <img src="/intervueNavLogo.svg" alt="" />
        </div>
        <div className="lg:flex gap-[30px] hidden   ">
          <div className="flex items-center gap-[3px] text-[16.5px] font-medium cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            Become an interviewer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex gap-[20px] items-center ">
            <span className="cursor-pointer text-[#282828] ">features</span>
            <span className="cursor-pointer text-[#282828] ">Pricing</span>
            <span className="cursor-pointer text-[#282828] ">Start a trial</span>
            <button className="w-[107px] h-[40px] cursor-pointer border border-[#000000] text-[#282828] ">
              Login
            </button>
            <button className="w-[107px] h-[40px] cursor-pointer bg-[#000000] text-white ">
              Sign up
            </button>
          </div>
        </div>
        <div className="lg:hidden flex cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
