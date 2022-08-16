import React from "react";
import styled from "styled-components";

import { ReactComponent as CertikLogo } from "../../../assets/images/contracts/window/certik.svg";

const Contracts: React.FC = () => {
  return (
    <>
      <ContractsPage>
        <ContractsBlock>
          <LeftBlock>
            <TitleText>Our contracts have been audited by</TitleText>
            <ContentText>
              Our Contract have been audited by best audit auditing in this
              field
            </ContentText>
          </LeftBlock>
          <RightBlock>
            <AuditedBy mr="68px">
              <CertikLogoImg />
            </AuditedBy>
          </RightBlock>
        </ContractsBlock>
      </ContractsPage>
    </>
  );
};

export default Contracts;

const ContractsPage = styled.div`
  width: 100%;
  height: 5.2rem;
  background: #ecf2f6;
  min-width: 900px;
  cursor: default;
`;

const ContractsBlock = styled.div`
  padding: 0 1.6rem;
  height: 5.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBlock = styled.div``;

const RightBlock = styled.div``;

const TitleText = styled.div`
  width: 4.57rem;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.48rem;
  line-height: 0.56rem;
  color: #1a1a1f;
`;

const ContentText = styled.div`
  width: 4.08rem;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.27rem;
  color: #1a1a1f;
  margin-top: 0.63rem;
`;
const AuditedBy = styled.div`
  border-radius: 0.24rem;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  background: #ffffff;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 1rem;
  display: flex;
  align-items: center;
  margin-right: 0.68rem;
`;

const CertikLogoImg = styled(CertikLogo)`
  width: 1.67rem;
  height: 0.4rem;
`;
