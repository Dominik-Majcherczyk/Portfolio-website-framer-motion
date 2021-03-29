import React from "react";
import home1 from "../img/home1.png";

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
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
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
          Contact us for any photograph or videography idead that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt="some image" variants={fotoAnimation} />
      </Image>
    </About>
  );
};

export default AboutSection;
