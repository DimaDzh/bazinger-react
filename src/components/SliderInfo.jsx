import React from "react";
import androidIcon from "./assets/image/android-icon.svg";
import appleIcon from "./assets/image/apple-icon.svg";

const SliderInfo = () => {
  return (
    <section className="flex flex-col px-4 pt-4 text-white lg:max-w-[50%] lg:pt-44 lg:translate-x-60">
      <h4 className="text-2xl pb-3">
        Simple, Beutiful <span className="font-bold">and Amazing</span>
      </h4>
      <p className="text-base pb:5 md:pb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc
        vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis at
        convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam
        pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.
      </p>
      <section className="flex flex-wrap lg:pb-12">
        <div>
          <button className="slide-buttons md:slide-lg__buttons md:mr-10 md:mb-3 md:py-5 md:px-12 hover:bg-[#4bcaff]">
            Download
          </button>
        </div>
        <div>
          <button className="slide-buttons md:slide-lg__buttons md:mr-10 md:mb-3 md:py-5 md:px-12 hover:bg-[#4bcaff]">
            learn more
          </button>
        </div>
      </section>
      <section className="flex flex-row items-center">
        <span className="pr-3">Aavailable on :</span>
        <span className="cursor-pointer pr-3 ">
          <img src={androidIcon} alt="" />
        </span>
        <span className="cursor-pointer pr-3">
          <img src={appleIcon} alt="" />
        </span>
      </section>
    </section>
  );
};

export default SliderInfo;
