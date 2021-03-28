import React from "react";
import home1 from "../img/home1.png";

//styled
import { About, Hide, Description, Image } from "../styles";
import styled from "styled-components";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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
