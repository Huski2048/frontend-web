import React from "react";
import styled from "styled-components";

import { ReactComponent as SecurityFirst } from "../../../assets/images/features/window/secfirst.svg";
import { ReactComponent as CommunityOwned } from "../../../assets/images/features/window/community.svg";
import { ReactComponent as NoInvestors } from "../../../assets/images/features/window/noinvestor.svg";
import { ReactComponent as FairLaunch } from "../../../assets/images/features/window/fairlaunch.svg";

class MobileFeatures extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Title>Why Huski</Title>
        <Subtitle>Features</Subtitle>
        <FeaturesLine>
          <LineImg>
            <SecurityFirst style={{ width: "1.8rem", height: "1.8rem" }} />
          </LineImg>
          <LineText>Security First</LineText>
        </FeaturesLine>

        <CutLine />

        <FeaturesLine>
          <LineText>Community Owned</LineText>
          <LineImg>
            <CommunityOwned style={{ width: "1.8rem", height: "1.8rem" }} />
          </LineImg>
        </FeaturesLine>

        <CutLine />

        <FeaturesLine>
          <LineImg>
            <NoInvestors style={{ width: "1.8rem", height: "1.8rem" }} />
          </LineImg>
          <LineText>No Investor</LineText>
        </FeaturesLine>

        <CutLine />

        <FeaturesLine>
          <LineText>Fair Launch</LineText>
          <LineImg>
            <FairLaunch style={{ width: "1.8rem", height: "1.8rem" }} />
          </LineImg>
        </FeaturesLine>

      </>
    );
  }
}

export default MobileFeatures;

const Title = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.28rem;
  line-height: 0.56rem;
  text-align: center;
  margin-top: 0.71rem;
`;

const Subtitle = styled.div`
  font-family: "GenJyuuGothic";
  font-weight: 400;
  font-size: 0.18rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1a1a1f;
  margin-bottom: 0.8rem;
`;

const FeaturesLine = styled.div`
  width: 4.54rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CutLine = styled.div`
  width: 4.54rem;
  height: 0.04rem;
  background: #f9f9f9;
  margin: 0.67rem auto;
`;

const LineImg = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;

const LineText = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  color: #1a1a1f;
  width: 1.8rem;
`;
