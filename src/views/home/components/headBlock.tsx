import React, { FC } from "react";
import styled from "styled-components";

import Circles from "../../../assets/images/home/window/Circles.svg";
import HuskiLogo from "../../../assets/images/home/window/HuskiLogo.svg";
import HuskyImg from "../../../assets/images/home/window/Husky.svg";
import MouseImg from "../../../assets/images/home/window/Mouse.svg";

const HeadBlock: React.FC = () => {
  const jumpOut = (webUrl: any) => {
    console.log(webUrl)
    window.open(webUrl)
  };
  return (
    <>
      <Block>
        <NavBlock>
          <LogoIcon src={HuskiLogo} />
          <NavRight>
            <NavRightText>Huski Buy</NavRightText>
            <Button onClick={jumpOut.bind(this,'https://dev.huski.finance')}>Launch App</Button>
          </NavRight>
        </NavBlock>
        <ContentBlock>
          <ContentLeft>
            <HText>Treat your huskies and they will treat you more</HText>
            <CText>
              Community-owned Leveraged Yield Farming Liquidity as a Service
            </CText>
            <LeftButton>
              <AppButton onClick={jumpOut.bind(this,'https://dev.huski.finance')}>Connect Wallet</AppButton>
              <MoreButton onClick={jumpOut.bind(this,'https://docs.huski.finance/')}>Learn More</MoreButton>
            </LeftButton>
          </ContentLeft>
          <ContentRight>
            <Husky src={HuskyImg} />
          </ContentRight>
        </ContentBlock>
        <MouseBlock>
          <Mouse src={MouseImg} />
        </MouseBlock>
      </Block>
    </>
  );
};

export default HeadBlock;

const Block = styled.div`
  background: #ecf2f6 url(${Circles});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  padding: 0 1.6rem;
  height: 9.5rem;
  cursor: default;
`;

const Line = styled.div`
  display: flex;
`;

const Image = styled.img`
  display: block;
`;

const LogoIcon = styled(Image)``;

const Button = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  width: 1.41rem;
  height: 0.56rem;
  background: #ffffff;
  border-radius: 0.16rem;
  text-align: center;
  line-height: 0.56rem;
  color: #1a1a1f;
  font-weight: 700;
  font-size: 0.16rem;
  transition: background-color 0.2s, opacity 0.2s;
  user-select: none;
  font-family: "GenJyuuGothic";
  :hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }
`;

const NavBlock = styled(Line)`
  justify-content: space-between;
  margin-top: 0.48rem;
  align-items: center;
`;

const NavRight = styled(Line)`
  align-items: center;
  width: 2.5rem;
  justify-content: space-between;
`;

const NavRightText = styled.div`
  font-weight: 700;
  font-size: 0.16rem;
  line-height: 0.24rem;
  color: #ffffff;
  font-family: "GenJyuuGothic";
`;

const ContentBlock = styled(Line)`
  justify-content: space-between;
  margin-top: 1.47rem;
`;
const ContentLeft = styled.div``;

const HText = styled.div`
  width: 6.94rem;
  height: 2.4rem;
  font-style: normal;
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 0.8rem;
  font-family: BalooBhaijaan;
  color: #1a1a1f;
`;

const CText = styled.div`
  width: 5.36rem;
  margin-top: 0.85rem;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.2rem;
  line-height: 0.29rem;
  letter-spacing: 0.05em;
  color: #3e3c46;
`;

const LeftButton = styled(Line)`
  margin-top: 1.06rem;
`;

const AppButton = styled(Button)`
  width: 1.67rem;
  height: 0.56rem;
  background: #7b3fe4;
  border-radius: 0.16rem;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.16rem;
  line-height: 0.56rem;
  color: #ffffff;
  cursor: pointer;
`;
const MoreButton = styled(Button)`
  margin-left: 0.2rem;
  width: 1.67rem;
  height: 0.56rem;
  border: 2px solid rgb(26, 26, 31);
  background: transparent;
  color: rgb(26, 26, 31);
  line-height: 0.52rem;
  cursor: pointer;
`;

const ContentRight = styled.div``;

const Husky = styled.img`
  width: 4.57rem;
  height: 6.02rem;
  position: relative;
  top: -0.3rem;
`;

const MouseBlock = styled.div`
  position: absolute;
  bottom: 0.7rem;
  width: calc(100vw - 3.2rem);
  text-align: center;
`;

const Mouse = styled.img`
  width: 0.56rem;
  height: 0.54rem;
`;
