import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = () => {
  const dynamicText = useRef(null);
  const dynamicName = useRef(null);

  useEffect(() => {
    const typed = new Typed(dynamicText.current, {
      strings: ["Frond end dev.", "web desainer.", "web developer"],

      typeSpeed: 200,
      backDelay: 1000,
      backSpeed: 500,
      loop: true,
    });
  }, []);

  useEffect(() => {
    const typed = new Typed(dynamicName.current, {
<<<<<<< HEAD
      strings: ["Muhamad Rafli Rabani"],
=======
      strings: ["Muhamad", "Rafli", "Rabani"],
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 100,
      loop: true,
    });
  }, []);

  const variant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
<<<<<<< HEAD
    <section className="h-svh text-start w-full" id="content">
      <div className="flex justify-between items-center w-full container mx-auto h-svh ">
        <div className="content w-1/2 font-medium text-2xl ps-20">
=======
    <section className="h-svh text-start w-full " id="content">
      <div className="flex justify-between items-center md:flex-row flex-col-reverse gap-0 w-full md:container md:mx-auto h-svh ">
        <div className="content text-base font-medium md:text-2xl md:ps-20 w-full md:w-1/2">
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
<<<<<<< HEAD
            className="text-5xl font-bold text-treed mb-1"
=======
            className="text-3xl md:text-5xl font-bold text-treed mb-1"
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
            id="sapaan"
          >
            Hi there✋,
          </motion.h1>
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
<<<<<<< HEAD
            className="text-3xl font-bold mb-1 w-full"
=======
            className="text-xl md:text-3xl font-bold mb-1 w-full"
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
            id="name"
          >
            My Name is{" "}
            <span className="text-second italic" ref={dynamicName}></span>
          </motion.h1>
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
<<<<<<< HEAD
            className="mb-2 text-3xl font-semibold"
=======
            className="text-xl mb-2 md:text-3xl font-semibold"
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
          >
            I`m A <span ref={dynamicText}></span>
          </motion.h1>
          <motion.p
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-treed text-xl leading-relaxed w-[85%]"
=======
            className="text-treed text-base md:text-xl leading-relaxed w-full md:w-[85%]"
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis dolor saepe illum fuga excepturi asperiores? Aperiam
            doloremque voluptates vero, dolore vitae repudiandae saepe atque
            dignissimos.
          </motion.p>
          <motion.button
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="rounded-lg bg-second text-treed px-4 py-2 text-sm mt-2"
          >
            Download CV
          </motion.button>
        </div>
        <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
<<<<<<< HEAD
          className="img w-1/2"
=======
          className="img mt-4 w-full md:w-1/2"
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
          id="img"
        >
          <img
            src="./profil.png"
            className="rounded-full block mx-auto "
            id="profil"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
