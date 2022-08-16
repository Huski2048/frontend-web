import React from "react";
import styled from "styled-components";

import { ReactComponent as Binance } from "../../../assets/images/backed/window/binance.svg";
import { ReactComponent as Zeppelin } from "../../../assets/images/backed/window/zeppelin.svg";
import { ReactComponent as Graph } from "../../../assets/images/backed/window/the-graph.svg";
import { ReactComponent as Ledger } from "../../../assets/images/backed/window/ledger.svg";
import { ReactComponent as Tether } from "../../../assets/images/backed/window/usdt.svg";
import { ReactComponent as PancakeSwap } from "../../../assets/images/backed/window/pancakeswap.svg";
import { ReactComponent as Eth } from "../../../assets/images/backed/window/eth.svg";
import { ReactComponent as Immunefi } from "../../../assets/images/backed/window/immunefi.svg";
import { ReactComponent as Trezor } from "../../../assets/images/backed/window/trezor.svg";
import { ReactComponent as WaultFinance } from "../../../assets/images/backed/window/WaultFinance.svg";

import PartnersList from "../../../assets/images/backed/window/partners.png";

import { ReactComponent as Outstanding } from "../../../assets/images/backed/window/outstanding.svg";

class Backed extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BackedPage>
          <BackedBlock>
            <BackedTitle>Backed By the best</BackedTitle>
            <BackedCardBlock>
              <CardBlack style={{ top: "2.24rem", left: "2.12rem" }}>
                <Graph style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText style={{ color: "#ffffff" }}>The Graph</CardText>
              </CardBlack>

              <CardWhite style={{ top: "1.46rem", left: "0rem" }}>
                <Binance style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText>Binance Smart Chain</CardText>
              </CardWhite>

              <CardWhite style={{ top: "3.24rem", left: "0.6rem" }}>
                <Zeppelin style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText>Openzepplin</CardText>
              </CardWhite>

              <CardWhite style={{ top: "2.38rem", left: "6.07rem" }}>
                <Ledger style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText>Ledger</CardText>
              </CardWhite>

              <CardBlack style={{ top: "1.34rem", left: "4.42rem" }}>
                <Tether style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText style={{ color: "#ffffff" }}>Tether</CardText>
              </CardBlack>

              <CardWhite style={{ top: "3.75rem", left: "3.68rem" }}>
                <PancakeSwap style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText>PancakeSwap</CardText>
              </CardWhite>

              <CardBlack style={{ top: "3.41rem", left: "6.64rem" }}>
                <Immunefi style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText style={{ color: "#ffffff" }}>Immunefi</CardText>
              </CardBlack>

              <CardBlack style={{ top: "1.61rem", left: "8.05rem" }}>
                <Trezor style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText style={{ color: "#ffffff" }}>Trezor</CardText>
              </CardBlack>

              <CardWhite style={{ top: "3.79rem", left: "9.04rem" }}>
                <Eth style={{ width: "0.43rem", height: "0.43rem" }} />
                <CardText>Ethereum</CardText>
              </CardWhite>
            </BackedCardBlock>
          </BackedBlock>
          <Partners>
            <PartnersTitle>Our Partners</PartnersTitle>
            <PartnersContent>Here are Husky Finance Partners</PartnersContent>
            <PartnersBlock>
              {/* <PartnersSingle>
                <PartnersIcon>
                  <WaultFinance />
                </PartnersIcon>
                <SingleText>Wault Finance</SingleText>
              </PartnersSingle> */}

              <PartnersListImg src={PartnersList} />
            </PartnersBlock>
          </Partners>
          <BallLeft></BallLeft>
          <BallRight></BallRight>
          <BallBlack></BallBlack>
          <BallIcon>
            <Outstanding style={{ width: "2.24rem", height: "2.24rem" }} />
          </BallIcon>
        </BackedPage>
      </>
    );
  }
}

export default Backed;

const BackedPage = styled.div`
  background: #2c353d;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const BackedBlock = styled.div`
  height: 7.44rem;
  padding: 0 1.6rem;
`;

const Partners = styled.div`
  height: 9.42rem;
  padding: 1.3rem 1.6rem 0 1.6rem;
`;

const BallLeft = styled.div`
  position: absolute;
  width: 5.6rem;
  height: 5.6rem;
  left: -2.8rem;
  top: 4.74rem;

  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  mix-blend-mode: overlay;
  opacity: 0.6;
  filter: blur(278.261px);
`;

const BallRight = styled.div`
  position: absolute;
  width: 3.89rem;
  height: 3.89rem;
  left: 13.52rem;
  top: 12.97rem;

  background: linear-gradient(
    135.15deg,
    #ae80dc 1.17%,
    #dc83c3 31.88%,
    #8084dc 65.46%
  );
  mix-blend-mode: overlay;
  filter: blur(160px);
`;

const BackedTitle = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.48rem;
  line-height: 0.56rem;
  color: #ffffff;
  text-align: center;
  padding-top: 1.22rem;
`;

const BackedCardBlock = styled.div`
  position: relative;
  height: 5.7rem;
`;

const CardWhite = styled.div`
  position: absolute;
  width: 2.16rem;
  height: 1.1rem;
  background: #ffffff;
  box-shadow: 0px 0px 0.06rem 0.06rem rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  transition-property: transform;
  :hover,
  :focus,
  :active {
    transform: scale(1.2);
    z-index: 99;
  }
`;

const CardBlack = styled.div`
  position: absolute;
  width: 2.16rem;
  height: 1.1rem;
  background: #2c353d;
  box-shadow: 0px 0px 0.18rem 0.06rem rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  transition-property: transform;
  :hover,
  :focus,
  :active {
    transform: scale(1.2);
    z-index: 99;
  }
`;

const CardText = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.24rem;
  color: #2c3540;
  width: 1.3rem;
  margin-left: 0.15rem;
`;

const PartnersTitle = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.48rem;
  line-height: 0.56rem;
  color: #ffffff;
  position: relative;
  z-index: 99;
`;

const PartnersContent = styled.div`
  margin-top: 0.2rem;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.27rem;
  color: #ffffff;
  opacity: 0.7;
`;

const PartnersBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
  margin-top: 1.24rem;
`;

const PartnersSingle = styled.div`
  width: 25%;
  margin-bottom: 0.41rem;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const SingleText = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.4rem;
  color: #ffffff;
  margin-left: 0.08rem;
`;

const PartnersIcon = styled.div`
  width: 0.44rem;
  height: 0.44rem;
  background: #ffffff;
  border: 0.01rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PartnersListImg = styled.img`
  width: 11.94rem;
  height: 5.42rem;
`;

const BallBlack = styled.div`
  position: absolute;
  width: 0.79rem;
  height: 0.79rem;
  left: 1.21rem;
  top: 8.49rem;
  border-radius: 0.79rem;
  background: #21272d;
`;

const BallIcon = styled.div`
  position: absolute;
  width: 2.68rem;
  height: 2.68rem;
  left: 9.9rem;
  top: 7.65rem;

  background: #2c353d;
  border: 1px solid #2a2a2e;
  backdrop-filter: blur(16px);
  border-radius: 2.68rem;

  display: flex;
  align-items: center;
  text-align: center;
`;
