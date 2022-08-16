import React from "react";
import styled from "styled-components";
import BackedImage from "../../../assets/images/backed/mobile/backed.png"

const MobileBacked: React.FC = () => {
  return (
    <>
      <Backed>
        <Title>Backed By the best</Title>
        <BackedImg src={BackedImage} />
        <Ball />
      </Backed>
    </>
  );
};

export default MobileBacked;

const Backed = styled.div`
  background: #2c353d;
  height: 7.33rem;
  width: 100%;
  position: relative;
`;
const Title = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.28rem;
  line-height: 0.56rem;
  color: #ffffff;
  text-align: center;
  padding: 0.65rem 0;
  z-index: 99;
  position: relative;
`;
const Ball = styled.div`
  position: absolute;
  top: 3.45rem;
  left: -1.47rem;
  width: 2.93rem;
  height: 2.93rem;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.97%,
    #8084dc 65.46%
  );
  border-radius: 100%;
  mix-blend-mode: overlay;
  opacity: 0.9;
  filter: blur(0.6rem);
`;

const BackedImg = styled.img`
  width: 7.5rem;
  height: 7.33rem;
  position: relative;
  top: -1.86rem;
`
