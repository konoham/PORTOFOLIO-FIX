import { motion } from "framer-motion";
import DataPortofolio from "../../../data/portofolio";
import Detail from "./detail";
import Url from "./url";

const Card = () => {
  const variant = {
    hidden: { opacity: 0, scaleX: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      scaleX: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5 * i, staggerChildren: 0.5 * i },
    }),
  };

  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-center items-center flex-wrap gap-4 ">
        {DataPortofolio.map((item, i) => (
          <motion.div
            key={i}
            variants={variant}
            initial="hidden"
            transition="transition"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="w-[300px] h-fit  box-border border shadow-sm rounded-lg bg-card text-treed relative"
          >
            <div className="relative shadow-sm">
              <a target="_blank" href={item.github}>
                <motion.img variants={variant} viewport={{ once: true }} initial="hidden" whileInView="visible" src={item.img} className="h-[150px] w-full object-cover" />
              </a>
              <motion.p variants={variant} viewport={{ once: true }} transition="transition" whileInView="visible" className="bg-primary p-2 rounded-e-lg absolute left-0 bottom-0">
                #{i + 1}
              </motion.p>
            </div>
            <div className="px-4 py-2">
              <a target="_blank" href={item.github}>
                <motion.h1 variants={variant} viewport={{ once: true }} transition="transition" whileInView="visible" className="text-treed font-bold hover:text-second">
                  {item.title}
                </motion.h1>
              </a>
              <motion.p variants={variant} viewport={{ once: true }} transition="transition" whileInView="visible" className="text-sm">
                {item.deskripsi}
              </motion.p>
              <motion.div variants={variant} viewport={{ once: true }} transition="transition" whileInView="visible" className="flex justify-between items-center mt-2 ">
                <Url item={item.website} />
                <Detail item={item.library} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
