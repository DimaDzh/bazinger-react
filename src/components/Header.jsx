import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import LogoImage from "../components/assets/image/logo.png";
import AnimatedNav from "./Animations/AnimatedNav";

const Header = () => {
  const [open, setOpen] = useState(true);
  const [linkColor, setLinkColor] = useState("#4BCAFF");
  const openNavbar = () => {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
  };
  const item = {
    exit: {
      zIndex: 220,
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
        delay: 0,
      },
    },
  };

  return (
    <header className=" relative bg-gradient-to-r from-[#0e1b2a] via-[#607f91] to-[#0e1b2a]">
      <nav className="flex items-center justify-between p-6">
        <section className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={LogoImage} alt="Bazinger" className="cursor-pointer" />
        </section>
        <div className="block lg:hidden">
          <div style={{ color: `${linkColor}` }} onClick={openNavbar}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <section className="hidden sm:hidden md:hidden lg:flex lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Home
            </a>
            <a
              href="/"
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Features
            </a>
            <a
              href="/"
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Gallery
            </a>
            <a
              href="/"
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Video
            </a>
            <a
              href={"/"}
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Prices
            </a>
            <a
              href="/"
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Testimonials
            </a>
            <a
              href="/"
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Download
            </a>
            <a
              href="/"
              className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
            >
              Contact
            </a>
          </div>
        </section>
      </nav>
      {open && (
        <AnimatedNav className="z-50">
          <nav
            className={
              open
                ? " z-60 lg:hidden h-0 w-[45%] sm:w-[35%] md:w-[40%]"
                : " z-60 flex top-full w-1/3 h-full lg:hidden"
            }
          >
            <section className="z-50 flex relative bg-gradient-to-r from-[#0e1b2a] via-[#607f91] to-[#0e1b2a] h-[100vh] ">
              <button className="absolute right-0 p-5" onClick={openNavbar}>
                <AiOutlineCloseCircle size={25} color={linkColor} />
              </button>
              <motion.div
                className="text-sm lg:flex-grow p-6 mr-8"
                variants={item}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100vh", opacity: 1 }}
                transition={{ duration: 0.1 }}
                exit="exit"
              >
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Home
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.9,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Features
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Gallery
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.7,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Video
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Prices
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Home
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Download
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.3,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Contact
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.3,
                    },
                  }}
                  className="block mt-4 uppercase lg:inline-block lg:mt-0 text-white hover:text-[#4bcaff] mr-4"
                >
                  Testimonials
                </motion.a>
              </motion.div>
            </section>
          </nav>
        </AnimatedNav>
      )}
    </header>
  );
};

export default Header;
