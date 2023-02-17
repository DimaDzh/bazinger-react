import React from "react";

const MapForm = () => {
  const MAP_URL =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d81317.31445734204!2d30.57188095347849!3d50.43800715826361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1675939868299!5m2!1sru!2sua";

  return (
    <section className="relative">
      <section className="map_box flex justify-center items-center w-full max-h-[650px]">
        <div className="map w-full h-full">
          <iframe
            className="w-full h-[640px]"
            title="This is a unique title"
            src={MAP_URL}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="flex justify-center text-center px-3 items-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action="POST"
          className="flex justify-center items-center flex-col p-8 bg-[rgba(75,201,255,0.6)] text-white border-0 rounded-lg"
        >
          <h4 className="text-4xl pb-8">Contact</h4>
          <input type="text" className="inputs p-2" placeholder="Your name" />
          <input type="email" className="inputs p-2" placeholder="Your email" />
          <input
            type="text"
            className="inputs p-2"
            placeholder="Subject"
          ></input>
          <input type="text" placeholder="Message" className="inputs pb-24" />
          <button className="text-[rgb(75,202,255)] bg-[rgb(65,64,66)] shadow-[#313032] shadow-md py-4 px-14 rounded-md transition-all hover:text-[#414042] hover:bg-[rgb(75,202,255)]">
            Send
          </button>
        </form>
      </section>
    </section>
  );
};

export default MapForm;
