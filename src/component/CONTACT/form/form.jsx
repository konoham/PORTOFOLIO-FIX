import { motion } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SendEmail } from "../../../libs/email";

const schema = yup
  .object({
    name: yup.string().required().max(25).min(4),
    email: yup.string().email().required(),
    message: yup.string().required().max(500),
  })
  .required();

const Form = () => {
  const variant = {
    hidden: {
      opacity: 0,
      scaleX: 0,
<<<<<<< HEAD
      x: -400,
=======
      y: 100,
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
    },
    visible: {
      opacity: 1,
      scaleX: 1,
<<<<<<< HEAD
      x: 0,
=======
      y: 0,
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const form = useRef(null);

  return (
    <>
      <form
<<<<<<< HEAD
        className="w-[60%] mx-auto text-sm text-black"
=======
        className="w-full md:w-[60%] mx-auto text-sm text-black overflow-x-hidden"
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
        ref={form}
        onSubmit={(e) => handleSubmit(SendEmail(form, e))}
        action=""
      >
        <div
          className="flex justify-center items-center gap-4 text-xl"
          id="name-email"
        >
<<<<<<< HEAD
          <div className="w-1/2">
=======
          <div className="w-full md:w-1/2">
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
            <motion.label
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              name
            </motion.label>
            <motion.input
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              type="text"
              name="name"
              viewport={{ once: true }}
              required
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <p className="text-red-500 text-sm text-start">
                {errors.name?.message}
              </p>
            )}
          </div>
<<<<<<< HEAD
          <div className="w-1/2">
=======
          <div className="w-full md:w-1/2">
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
            <motion.label
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              email
            </motion.label>
            <motion.input
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              type="email"
              name="email"
              required
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm text-start">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        <div id="pesan" className="w-full ">
          <motion.label
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            massage
          </motion.label>
          <motion.textarea
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            type="text"
            name="message"
            className="w-full"
            required
            {...register("message", { required: true })}
          />
          {errors?.message && (
            <p className="text-red-500 text-sm text-start">
              {errors.message?.message}
            </p>
          )}
        </div>
        <motion.button
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="rounded-lg bg-second text-treed px-4 py-2 text-sm mt-2"
          value="Send"
          type="submit"
        >
          Download CV
=======
          className="w-[30%] md:w-full rounded-lg bg-second text-treed px-4 py-2 md:text-sm md:mt-2 text-xs ms-auto md:ms-0"
          value="Send"
          type="submit"
          id="submitbtn"
        >
          UPLOAD
>>>>>>> fffa26f (membuat custom cursor dan custom bg)
        </motion.button>
      </form>
    </>
  );
};

export default Form;
