import { delay, motion } from "framer-motion";
const nav = ["home", "skill", "portofolio", "contact"];

const Navbar = () => {
  const variant = {
    hidden: { x: -100, opacity: 0 },
<<<<<<< HEAD
    visible: { x: 0, opacity: 1 },
    transition: (i) => ({ duration: 1 }),
  };

  return (
    <div className="bg-second font-medium" id="navbar">
      <div className="container m-auto h-full">
        <motion.ul
          variants={variant}
          initial="hidden"
          animate="visible"
          transition="transition"
          className="flex justify-evenly items-center flex-col h-full"
        >
=======
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className="bg-second font-medium ms-[-1rem] me-4 box-border"
      id="navbar"
    >
      <div className="container m-auto h-full">
        <motion.ul className="flex justify-evenly items-center flex-col h-full">
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
          {nav.map((item, i) => (
            <motion.li
              key={i}
              variants={variant}
<<<<<<< HEAD
              transition={{ delay: 0.2 * i }}
              custom={{ i }}
=======
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 * i, duration: 0.6 }}
              custom={i}
              viewport={{ once: true }}
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
