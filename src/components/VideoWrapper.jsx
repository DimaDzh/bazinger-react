import React, { useState } from "react";
import videoBgImage from "./assets/image/video.jpg";
import Modal from "react-modal";
import { AiFillCloseSquare } from "react-icons/ai";

const VideoWrapper = () => {
  const videoUrl = "https://www.youtube.com/embed/Tn6-PIqc4UM";
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="relative text-center flex justify-center items-center">
      <section className="flex z-0 w-full h-96 lg:max-h-[550px] justify-center items-center  text-center relative">
        <img src={videoBgImage} alt="" className="w-full h-full" />
        <div className="absolute z-10 w-full h-full bg-[rgba(75,202,255,0.5)]"></div>

        <div className="absolute z-20 text-white ">
          <div className="flex justify-center items-center mb-4 md:mb-11">
            <button
              onClick={openModal}
              className="border-2 rounded-lg px-10 py-5 "
            >
              <div
                className="w-0 h-0 
                border-t-[25px] border-t-transparent
                border-l-[50px] border-l-white-600
                border-b-[25px] border-b-transparent"
              ></div>
            </button>
          </div>
          <h6 className="text-4xl">
            Watch the best Technology in{" "}
            <span className="font-bold">Action</span>
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            vitae quidem sapiente facilis veniam ratione dolores voluptas sint,
            sunt cum.
          </p>
        </div>
      </section>
      <Modal
        shouldCloseOnEsc
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="z-50 flex justify-center items-center flex-col"
      >
        <section className="translate-y-[50%]">
          <iframe
            className="w-80 h-40 px-2 sm:w-[560px] sm:h-[315px]"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
        <button className="absolute right-0 top-0 m-2" onClick={closeModal}>
          <AiFillCloseSquare size={35} />
        </button>
      </Modal>
    </section>
  );
};

export default VideoWrapper;
