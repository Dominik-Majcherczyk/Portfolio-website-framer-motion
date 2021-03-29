import React from "react";
import home1 from "../img/home1.png";
import Wave from "./Wave";

//styled
import { About, Hide, Description, Image } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, fotoAnimation } from "./../animation";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>I will make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fadeAnimation}>
          Contact me for any programming idead that you have. I'm professional
          with amazing skills
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="some image"
          variants={fotoAnimation}
          initial="hidden"
          animate="show"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
