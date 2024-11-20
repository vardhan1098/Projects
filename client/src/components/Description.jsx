import React from "react";
import { assets } from "../assets/assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg "
        />
        <div className="">
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the Ai-Powered Text to Image Generator.
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            rem cum! Explicabo aliquam iusto unde doloribus aliquid ducimus
            repellat quaerat?
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, labore inventore, sapiente magnam ea velit eaque
              cupiditate, repudiandae saepe ipsum blanditiis nisi. Cum velit
              quas, beatae itaque in odio recusandae quod sint. Ut omnis earum
              aperiam nihil dolore. Consequatur, et.
            </p>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
