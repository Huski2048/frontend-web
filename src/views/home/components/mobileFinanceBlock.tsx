import React from "react";
import styled from "styled-components";

import { ReactComponent as HuskiIcon } from "../../../assets/images/features/window/huskiIcon.svg";
import { ReactComponent as Tokenomics } from "../../../assets/images/features/window/tokenomics.svg";
import { ReactComponent as Roadmap } from "../../../assets/images/features/window/roadmap.svg";

class MobileFinance extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <FinanceBlock>
          <Head>
            <Title>HUSKI Finance</Title>
          </Head>
          <Body>
            <FinanceCard>
              <CardImg>
                <HuskiIcon style={{ width: "2.2rem", height: "2.2rem" }} />
              </CardImg>
              <Text>Intro to Huski Finance</Text>
            </FinanceCard>
            <FinanceCard>
              <Text>Tokenomics</Text>
              <CardImg>
                <Tokenomics style={{ width: "2.2rem", height: "2.2rem" }} />
              </CardImg>
            </FinanceCard>
            <FinanceCard>
              <CardImg>
                <Roadmap style={{ width: "2.2rem", height: "2.2rem" }} />
              </CardImg>
              <Text>Roadmap</Text>
            </FinanceCard>
          </Body>
        </FinanceBlock>
      </>
    );
  }
}

export default MobileFinance;

const FinanceBlock = styled.div`
  margin-top: 1.24rem;
`;

const Head = styled.div`
  height: 2.01rem;
  width: 6.92rem;
  margin: 0 auto;
  background: linear-gradient(to right, #7c42e3, #fea989);
  border-radius: 0.24rem 0.24rem 0px 0px;

  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.28rem;
  line-height: 0.56rem;
  text-align: center;
  color: #ffffff;
  margin-top: 0.32rem;
`;

const Body = styled.div`
  background-color: #000000;
  width: 7.02rem;
  margin: 0 auto;
  border-radius: 0.24rem;
  padding: 0.32rem 0;
  position: relative;
  top: -0.89rem;
`;

const FinanceCard = styled.div`
  height: 2.8rem;
  width: 6.48rem;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(32, 38, 43, 0.8) 0%, #20262b 100%);
  backdrop-filter: blur(16px);
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.43rem;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;

const CardImg = styled.div`
  width: 50%;
  text-align: center;
`;

const Text = styled.div`
  width: 50%;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.24rem;
  text-align: center;
  color: #ffffff;
  text-align: center;
`;
