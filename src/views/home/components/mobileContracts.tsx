import React from "react";
import styled from "styled-components";

import { ReactComponent as CertikLogo } from "../../../assets/images/contracts/window/certik.svg";

const MobileContracts: React.FC = () => {
  return (
    <>
      <Contracts>
        <Title>Our contracts have been audited by</Title>
        <Block>
            <CertikLogo style={{width:'1.45rem'}} />
        </Block>
        <SubTitle>
          Our Contract have been audited by best audit auditing in this field
        </SubTitle>
      </Contracts>
    </>
  );
};

export default MobileContracts;

const Contracts = styled.div`
  margin-top: 0.3rem;
`;
const Title = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.3rem;
  line-height: 0.56rem;
  letter-spacing: 0.05em;
  color: #1a1a1f;
  text-align: center;
`;

const Block = styled.div`
  width: 2.49rem;
  height: 0.89rem;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  border-radius: 0.24rem;
  margin: 0.24rem auto 0.34rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-family: "GenJyuuGothic";
  width: 6.52rem;
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.38rem;
  color: #c7c7ca;
  text-align: center;
  margin: 0 auto;
`;
