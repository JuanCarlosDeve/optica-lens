"use client";
import React, { useRef, useEffect, useState } from "react";
// Libraries
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';

// Import VideoJS styles
import "video.js/dist/video-js.css";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import MuxPlayer from "@mux/mux-player-react";
import VideoJS from './video.jsx'
import videojs from 'video.js';

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  return (
    <div className="video-container flex justify-center">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const videoList = [
  {
    type: "youtube",
    videoId: "u0K-wm28fsY",
  },
  {
    type: "youtube",
    videoId: "another-video-id",
  },
];

// button next-prev 
type SwiperButtonProps = {
  children: React.ReactNode
}

const SwiperButtonNext = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrev = ({ children }: SwiperButtonProps) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};





const Carousel = () => {

  const [isPaused, setIsPaused] = useState(false);

  const playerRef = useRef(null);

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };



  return (
    <>
      <div className="carousel ">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper relative "
          onSlideChangeTransitionStart={() => { setIsPaused(true) }}
          onSlideChangeTransitionEnd={() => { setIsPaused(false) }}

        >
          <div className="botones-carrusel only-lg-flex flex justify-between absolute w-full top-[40%]">
            <SwiperButtonPrev>
              <div className="z-50 relative right-[10%]">
                <picture>
                  <img
                    src='/img/icons/vector_left.svg'
                    alt="next"
                    className="w-[100px] h-[100px] object-contain cursor-pointer"
                  />
                </picture>
              </div>
            </SwiperButtonPrev>

            <SwiperButtonNext>
              <div className="z-50 relative left-[10%]">
                <picture>
                  <img
                    src='/img/icons/vector_right.svg'
                    alt="next"
                    className="w-[100px] h-[100px] object-contain cursor-pointer"
                  />
                </picture>
              </div>
            </SwiperButtonNext>

          </div>


          {videoList.map((video, index) => (
            <SwiperSlide className=" " key={index}>
              <div className="myvideo video-container mr-[7%] ml-[7%]">
                {video.type === "youtube" && <YouTubeVideo videoId={video.videoId} />}
              </div>
            </SwiperSlide>
          ))}


        </Swiper>


      </div>
    </>
  );
};

export default Carousel;