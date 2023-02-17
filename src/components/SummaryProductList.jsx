import React from "react";
import SummaryProductItem from "./SummaryProductItem";
import designIcon from "./assets/image/design-icon.svg";
import customizeIcon from "./assets/image/costomize-icon.svg";
import multipurposeIcon from "./assets/image/multipropose-icon.svg";
import layoutIcon from "./assets/image/layout-icon.svg";

const SummaryProductList = () => {
  return (
    <main className="flex flex-col justify-center items-center border-b-2 mb-12">
      <section className="flex flex-col justify-center text-center items-center pb-10 ">
        <h2 className="text-[#414042] font-bold text-4xl">
          summarise the features
        </h2>
        <p>summarise what your product is all about</p>
      </section>
      <section className="container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <SummaryProductItem
          icon={layoutIcon}
          title={"Attractive layout"}
          summary=" Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam
                 elerisque mi id faucibus
                iaculis vitae pulvinar."
        />
        <SummaryProductItem
          icon={designIcon}
          title={"Fresh design"}
          summary=" Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam
                 elerisque mi id faucibus
                iaculis vitae pulvinar."
        />
        <SummaryProductItem
          icon={multipurposeIcon}
          title={"Multipurpose"}
          summary=" Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam
                 elerisque mi id faucibus
                iaculis vitae pulvinar."
        />
        <SummaryProductItem
          icon={customizeIcon}
          title={"Easy to customize"}
          summary=" Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam
                 elerisque mi id faucibus
                iaculis vitae pulvinar."
        />
      </section>
    </main>
  );
};

export default SummaryProductList;
