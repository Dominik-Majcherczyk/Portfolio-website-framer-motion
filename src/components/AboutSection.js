import React from "react";
import home1 from "../img/home1.png";

//styled
import { About, Hide, Description, Image } from "../styles";
//framer motion
import { motion } from "framer-motion";
const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const containerAnim = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1 } },
  };

  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={containerAnim}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photograph or videography idead that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="some image" />
      </Image>
    </About>
  );
};

export default AboutSection;
