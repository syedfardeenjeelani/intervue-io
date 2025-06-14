"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";

const Feedback = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:justify-start justify-center items-start lg:items-center gap-[50px] lg:w-[86vw] lg:mx-auto h-[68vh]  lg:h-[75vh]">
        <div className="relative w-fit">
          <video
            ref={videoRef}
            src="https://dersyb7nfifdf.cloudfront.net/public/assets/videos/Yubi-Niket.mp4"
            poster="/Screenshot 2025-06-15 001901.png"
            className="md:w-[700px] w-[340px] sm:h-[280px] object-cover  cursor-pointer rounded-br-[300px] rounded-tr-[300px]"
            onClick={togglePlay}
            preload="metadata"
          />

          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src="/images-removebg-preview.png"
                alt="Play Button"
                className="w-[120px] h-[120px]"
              />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-[15px] pl-[25px] pr-[8px]">
          <span className="text-[16px] text-[#6d6d6d] leading-[20px] sm:w-[425px] ">
            After interviewing candidates on Intervue, we were able to convert
            at least 5% of people from our application base to hires.
          </span>
          <div className="flex flex-col">
            <span className="font-semibold">Niket Gupta </span>
            <span className="text-[#6d6d6d]">
              Group head of talent acquisition, Yubi
            </span>
          </div>
          <Link href="#" className="text-blue-700 font-semibold">
            See more customer stories →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Feedback;
