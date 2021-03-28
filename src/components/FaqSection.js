import React from "react";
import styled from "styled-components";
import { About } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <div className="questions">
        <h4>question</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quos corrupti blanditiis nemo, quasi accusamus voluptatibus
            praesentium voluptate cumque excepturi!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>question</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quos corrupti blanditiis nemo, quasi accusamus voluptatibus
            praesentium voluptate cumque excepturi!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>question</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quos corrupti blanditiis nemo, quasi accusamus voluptatibus
            praesentium voluptate cumque excepturi!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>question</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quos corrupti blanditiis nemo, quasi accusamus voluptatibus
            praesentium voluptate cumque excepturi!
          </p>
        </div>
      </div>
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
