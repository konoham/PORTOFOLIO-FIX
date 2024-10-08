import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = () => {
  const dynamicText = useRef(null);
  const dynamicName = useRef(null);

  useEffect(() => {
    const typed = new Typed(dynamicText.current, {
      strings: ["Frond end dev.", "backend developer", "Fullstact developer", "web developer"],

      typeSpeed: 250,
      backDelay: 100,
      backSpeed: 300,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(dynamicName.current, {
      strings: ["Muhamad", "Rafli", "Rabani"],
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
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
    <section className="h-svh text-start w-svw md:w-full md:px-0 pe-2" id="content">
      <div className="flex justify-between items-center md:flex-row flex-col-reverse gap-0 w-full md:container md:mx-auto h-svh ">
        <div className="content text-base font-medium md:text-2xl md:ps-20 w-full md:w-3/5">
          <motion.h1 variants={variant} initial="hidden" animate="visible" transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-bold text-second mb-1" id="sapaan">
            Hi There✋,
          </motion.h1>
          <motion.h1 variants={variant} initial="hidden" animate="visible" transition={{ duration: 0.6 }} className="text-xl md:text-3xl font-bold mb-1 w-full" id="name">
            My Name is <span className="text-second italic" ref={dynamicName}></span>
          </motion.h1>
          <motion.h1 variants={variant} initial="hidden" animate="visible" transition={{ duration: 0.7 }} className="text-xl mb-2 md:text-3xl font-semibold">
            I`m A <span ref={dynamicText}></span>
          </motion.h1>
          <motion.p variants={variant} initial="hidden" animate="visible" transition={{ duration: 0.8 }} className="text-treed md:indent-4 text-base md:text-lg leading-relaxed w-[90%] mb-2 md:w-[85%]">
            I am a front-end web developer specializing in JavaScript and TypeScript, with expertise in frameworks like React.js and Next.js. I also have experience in backend development using Express.js and Node.js.
          </motion.p>
          <motion.a
            href="/cv.pdf"
            download
            target="_blank"
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="rounded-lg border border-black shadow-sm btn_effect overflow-hidden px-4 py-2 text-sm mt-2 hover:text-white"
          >
            Download CV
          </motion.a>
        </div>
        <motion.div variants={variant} initial="hidden" animate="visible" transition={{ delay: 0.2, duration: 0.8 }} className="img mt-4 md:mt-1 rounded-full block w-4/5 mx-auto md:px-0 pe-4 md:w-2/5 h-fit" id="img">
          <img src="./profil1.png" className="rounded-full size-[95%] md:size-2/3 -mt-2 mx-auto " id="profil" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// My Password: 5nbLFEqPgp3
