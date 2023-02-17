import React from "react";

const SummaryProductItem = ({ icon, title, summary }) => {
  return (
    <section className="flex cursor-pointer group flex-col items-center justify-center text-center my-0 mx-auto text-sm max-w-[240px] mb-12 lg:mb-24 ">
      <div className="flex justify-center items-center max-w-[170px] max-h-[170px] p-7 lg:p-14 bg-[#4bcaff] transition-all border-spacing-1 border-neutral-300 rounded-full  mb-8 group-hover:bg-[#414042]">
        <img
          src={icon}
          alt={title}
          className="h-10 w-10 md:h-16 md:w-16 lg:w-20 lg:h-20"
        />
      </div>
      <h4 className="text-base text-[#414042] uppercase bold font-bold transition-all group-hover:text-[#4bcaff]">
        {title}
      </h4>
      <p className="text-[#414042]">{summary}</p>
    </section>
  );
};

export default SummaryProductItem;
