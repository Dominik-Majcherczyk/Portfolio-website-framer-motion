import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollAnimation } from "../animation";
import { useScroll } from "./useScroll";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="praesentium voluptate">
          <div className="answer">
            <p>blanditiis nemo.</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quos corrupti blanditiis nemo, quasi accusamus
              voluptatibus praesentium voluptate cumque excepturi!
            </p>
          </div>
        </Toggle>
        <Toggle title="voluptatibus praesentium">
          <div className="answer">
            <p>consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quos corrupti blanditiis nemo, quasi accusamus
              voluptatibus praesentium voluptate cumque excepturi!
            </p>
          </div>
        </Toggle>
        <Toggle title="quasi accusamus">
          <div className="answer">
            <p>praesentium voluptate cumque.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quos corrupti blanditiis nemo, quasi accusamus
              voluptatibus praesentium voluptate cumque excepturi!
            </p>
          </div>
        </Toggle>
        <Toggle title="sit amet">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quos corrupti blanditiis nemo, quasi accusamus
              voluptatibus praesentium voluptate cumque excepturi!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 4rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
