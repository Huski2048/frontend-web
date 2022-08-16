import React from "react";
import styled from "styled-components";
import PartnersImage from "../../../assets/images/backed/mobile/partners.png"

const MobilePartners: React.FC = () => {
  return (
    <>
      <Partners>
        <Title>Our Partners</Title>
        <SubTitle>Here are Huski Finance Partners</SubTitle>
        <PartnersImg src={PartnersImage} />
        <Ball />
      </Partners>
    </>
  );
};

export default MobilePartners;

const Partners = styled.div`
  background: #2c353d;
  height: 8rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Title = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.28rem;
  line-height: 0.56rem;
  color: #ffffff;
  text-align: center;
  padding: 0.65rem 0 0 0;
  z-index: 999;
  position: relative;
`;
const SubTitle = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.56rem;
  color: #ffffff;
  text-align: center;
  z-index: 999;
  position: relative;
`;
const Ball = styled.div`
  position: absolute;
  top: 0.45rem;
  left: 7.05rem;
  width: 2.02rem;
  height: 2.04rem;
  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  border-radius: 100%;
  mix-blend-mode: overlay;
  opacity: 0.9;
  filter: blur(0.6rem);
`;

const PartnersImg = styled.img`
  width: 7.5rem;
  height: 8.02rem;
  position: relative;
  top: -1.77rem;
`
