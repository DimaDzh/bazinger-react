import React from "react";
import galleryCardImg from "./assets/image/gallery.png";

const GalletyCard = ({ cardNumber, description }) => {
  return (
    <section className=" flex flex-col mb-2 lg:mb-5 w-full md:w-1/2 lg:w-1/4  lg:px-3  justify-center items-center text-center">
      <div className="relative group mb-5">
        <img src={galleryCardImg} alt="gallery-card" />
        <h4 className="w-full absolute uppercase py-2 bg-[rgba(66,64,64,0.7)] text-[#4bcaff] bottom-0 border-b-2 rounded-b-lg">
          Screen Shot #{cardNumber}
        </h4>
        <div className="hidden text-white justify-center items-center absolute top-0 left-0 w-full h-full bg-[rgba(75,201,255,0.5)] border-4 rounded-lg text-6xl font-bold group-hover:flex ">
          <span>+</span>
        </div>
      </div>
      <p className="card__description  w-auto px-4  md:px-16">{description}</p>
    </section>
  );
};

export default GalletyCard;
