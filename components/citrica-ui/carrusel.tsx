"use client";
import React, { useRef, useEffect } from "react";
// Libraries
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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


const Carousel = () => {
  //const playerRef = useRef<videojs.Player | null>(null);
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
      <section className="carousel">
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"

        >
          <div className="swiper-wrapxper">

            {videoList.map((video) => (
              <SwiperSlide className="" key={video.poster}>
                <div className="myvideo">
                  <VideoJS className="block" options={video} onReady={handlePlayerReady} />
                </div>
              </SwiperSlide>

            ))}

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </Swiper>

      </section>
    </>
  );
};

export default Carousel;