import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as SecurityFirst } from "../../../assets/images/features/window/secfirst.svg";
import { ReactComponent as CommunityOwned } from "../../../assets/images/features/window/community.svg";
import { ReactComponent as NoInvestors } from "../../../assets/images/features/window/noinvestor.svg";
import { ReactComponent as FairLaunch } from "../../../assets/images/features/window/fairlaunch.svg";

import { ReactComponent as HuskiIcon } from "../../../assets/images/features/window/huskiIcon.svg";
import { ReactComponent as Tokenomics } from "../../../assets/images/features/window/tokenomics.svg";
import { ReactComponent as Roadmap } from "../../../assets/images/features/window/roadmap.svg";

const FeaturesBlock: React.FC = () => {
  const jumpOut = (webUrl: any) => {
    window.open(webUrl)
  };
  return (
    <>
      <WhyPage>
        <SmallTitle>Features</SmallTitle>
        <BlockTitle>Why Huski</BlockTitle>
        <Features>
          <Card>
            <SecurityFirstImg />
            <CardText>Security First</CardText>
          </Card>
          <Row></Row>
          <Card>
            <CommunityOwnedImg />
            <CardText>Community Owned</CardText>
          </Card>
          <Row></Row>
          <Card>
            <NoInvestorsImg />
            <CardText>No Investors</CardText>
          </Card>
          <Row></Row>
          <Card>
            <FairLaunchImg />
            <CardText>Fair Launch</CardText>
          </Card>
        </Features>
        <HuskiFinance>
          <FinanceHead>
            <HeadText>HUSKI Finance</HeadText>
          </FinanceHead>
          <FinanceBody>
            <FinanceCard onClick={jumpOut.bind(this,'https://docs.huski.finance/')}>
              <CardImgBlock>
                <HuskiIconImg />
              </CardImgBlock>
              <CardTextBlock>Intro to HUSKI finance</CardTextBlock>
            </FinanceCard>
            <FinanceCard onClick={jumpOut.bind(this,'https://docs.huski.finance/tokenomics/husky-token')}>
              <CardImgBlock>
                <TokenomicsImg />
              </CardImgBlock>
              <CardTextBlock>Tokenomics</CardTextBlock>
            </FinanceCard>
            <FinanceCard onClick={jumpOut.bind(this,'https://docs.huski.finance/roadmap')}>
              <CardImgBlock>
                <RoadmapImg />
              </CardImgBlock>
              <CardTextBlock>Roadmap</CardTextBlock>
            </FinanceCard>
          </FinanceBody>
        </HuskiFinance>
      </WhyPage>
    </>
  );
};

export default FeaturesBlock;

const WhyPage = styled.div`
  padding: 0.74rem 0 1.2rem 0;
  cursor: default;
`;
const SmallTitle = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.12rem;
  line-height: 0.16rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1a1a1f;
`;

const BlockTitle = styled.div`
  font-family: "GenJyuuGothic";
  margin-top: 0.16rem;
  font-style: normal;
  font-weight: 700;
  font-size: 0.48rem;
  line-height: 0.56rem;
  text-align: center;
  color: #1a1a1f;
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.74rem;
  width: 11.04rem;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  text-align: center;
  position: relative;
  transition-duration: 0.5s;
  transition-property: transform;
  :hover,
  :focus,
  :active {
    /* transform: scale(1.5); */
    transform: translate(0px, -0.3rem);
  }
`;

const Row = styled.div`
  height: 1.9rem;
  width: 0.04rem;
  background: #f9f9f9;
`;
const CardText = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.16rem;
  line-height: 0.24rem;
  text-align: center;
  color: #1a1a1f;
  margin-top: 0.1rem;
`;

const HuskiFinance = styled.div`
  margin-top: 0.62rem;
`;

const FinanceHead = styled.div`
  background: linear-gradient(to right, #7c42e3, #fea989);
  border-radius: 20px 20px 0 0;
  width: 11.04rem;
  height: 1.46rem;
  line-height: 1.46rem;
  margin-left: auto;
  margin-right: auto;
`;

const HeadText = styled.div`
  color: white;
  font-size: 0.48rem;
  font-weight: 600;
  line-height: 1.5;
  font-size: 0.48rem;
  text-align: center;
  font-family: "GenJyuuGothic";
  line-height: 1.46rem;
`;

const FinanceBody = styled.div`
  background: #2c353d;
  border-radius: 20px;
  width: 11.2rem;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  margin-top: -2px;
  display: flex;
  justify-content: space-between;
`;

const FinanceCard = styled.div`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;

const CardImgBlock = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background: linear-gradient(180deg, rgba(32, 38, 43, 0.8) 0%, #20262b 100%);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTextBlock = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.2rem;
  line-height: 0.24rem;
  text-align: center;
  color: #ffffff;
  margin-top: 0.2rem;
`;

const HuskiIconImg = styled(HuskiIcon)`
  transition-duration: 0.5s;
  transition-property: transform;
  width: 2.2rem;
  height: 2.2rem;
  :hover,
  :focus,
  :active {
    transform: scale(1.2);
  }
`;

const TokenomicsImg = styled(Tokenomics)`
  transition-duration: 0.5s;
  transition-property: transform;
  width: 2.2rem;
  height: 2.2rem;
  :hover,
  :focus,
  :active {
    transform: scale(1.2);
  }
`;

const RoadmapImg = styled(Roadmap)`
  transition-duration: 0.5s;
  transition-property: transform;
  width: 2.2rem;
  height: 2.2rem;
  :hover,
  :focus,
  :active {
    transform: scale(1.2);
  }
`;

const SecurityFirstImg = styled(SecurityFirst)`
  width: 1.1rem;
  height: 1.1rem;
`;

const CommunityOwnedImg = styled(CommunityOwned)`
  width: 1.1rem;
  height: 1.1rem;
`;

const NoInvestorsImg = styled(NoInvestors)`
  width: 1.1rem;
  height: 1.1rem;
`;

const FairLaunchImg = styled(FairLaunch)`
  width: 1.1rem;
  height: 1.1rem;
`;
