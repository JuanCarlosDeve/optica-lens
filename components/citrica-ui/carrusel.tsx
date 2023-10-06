"use client";
import React, { useRef, useEffect } from "react";
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

export const videoList = [
  {
    autoplay: false,
    controls: true,
    responsive: true,
    loop: false,
    fluid: true,
    poster: "/img/video-poster.jpg",
    sources: [{
      src: "https://into-the-program.com/uploads/sample_video03.mp4",
      type: 'video/mp4'
    }]
  },
  {
    autoplay: false,
    controls: true,
    responsive: true,
    loop: false,
    fluid: true,
    poster: "/img/stock-photo.jpg",
    sources: [{
      src: "https://into-the-program.com/uploads/sample_video03.mp4",
      type: 'video/mp4'
    }]
  },


];

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
  //const playerRef = useRef<videojs.Player | null>(null);
  const playerRef = useRef(null);
  // const swiper = useSwiper();


  // const handleNextClick = () => {
  //   swiper.slideNext();
  // };

  // const handlePrevClick = () => {
  //   swiper.slidePrev();
  // };


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
      <div className="carousel">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper relative"

        >
          <div className="botones-carrusel only-lg-nav flex justify-between absolute w-full top-[35%]">
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


          {videoList.map((video) => (
            <SwiperSlide className="" key={video.poster}>
              <div className="myvideo video-container">
                <VideoJS className="block" options={video} onReady={handlePlayerReady} />
              </div>
            </SwiperSlide>

          ))}


        </Swiper>


      </div>
    </>
  );
};

export default Carousel;