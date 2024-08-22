import { delay, motion } from "framer-motion";
import { useState } from "react";

export const nav = [
  { li: "Home", url: "#main-container" },
  { li: "Teckstack", url: "#Teckstack" },
  { li: "Portofolio", url: "#Portofolio" },
  { li: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const variant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      onViewportEnter={() => setVisible(true)}
      onViewportLeave={() => setVisible(false)}
      viewport={{ margin: "50px" }}
      className="bg-second hidden md:block ms-[-1rem] me-4 box-border px-9"
      id="nav1"
    >
      <div className="container m-auto h-full">
        <motion.ul className="flex justify-evenly text-lg items-center flex-col h-full">
          {nav.map((item, i) => (
            <motion.li
              key={i}
              variants={variant}
              initial="hidden"
              animate={visible ? "visible" : "hidden"} // Perbaikan
              transition={{ delay: 0.3 * i, duration: 0.6 }}
              className="tracking-wide anav hover:text-slate-900"
            >
              <a href={item.url} className="after:bg-black after:w-[2px] after:-bottom-3 after:h-0 after:top-0 left-0 ">
                {item.li}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
