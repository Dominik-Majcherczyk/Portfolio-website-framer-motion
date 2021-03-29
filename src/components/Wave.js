import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 791 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M3 20C20 169 200 100 220 5.00001C256 7.66665e-06 358 243 444 135C530 27 790 10 790 10"
        stroke="#F388EF"
        stroke-width="9"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`;

export default Wave;
