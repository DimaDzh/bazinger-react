import React from "react";
import GalletyCard from "./GalletyCard";

const Gallery = () => {
  const galleryNumbArray = [1, 2, 3, 4];
  return (
    <section className="px-2 mb-4 lg:mb-24">
      <section className="flex flex-wrap text-center flex-col justify-center items-center pb-10">
        <h2 className="text-[#414042] font-bold te text-4xl">
          show the gallery
        </h2>
        <p>summarise what your product is all about</p>
      </section>
      <section className="flex w-full flex-wrap justify-center items-center  mb-12 lg:mb-24">
        {galleryNumbArray.map((number) => {
          return (
            <GalletyCard
              key={number.toString().concat(Date.now())}
              cardNumber={number}
              description="Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                            pulvinar massa idporta nequetiam elerisque mi id faucibus
                            iaculis vitae pulvinar."
            />
          );
        })}
      </section>
    </section>
  );
};
export default Gallery;
