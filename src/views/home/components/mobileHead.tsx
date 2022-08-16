import React from "react";
import styled from "styled-components";

import MobileHeadImage from "../../../assets/images/home/mobile/head-background.png";
import { ReactComponent as Logo } from "../../../assets/images/home/mobile/logo.svg";
import { ReactComponent as GogPaw } from "../../../assets/images/home/mobile/dogPaw.svg";
import { ReactComponent as Cloud } from "../../../assets/images/home/mobile/cloud.svg";

class MobileHead extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const jumpOut = (webUrl: any) => {
        window.open(webUrl)
      };
    return (
      <>
        <MobileHeadBlock>
          <LogoBlock />
          <H3Text>Community-owned</H3Text>
          <H3Text>Leveraged Yield Farming</H3Text>
          <HeadButton>
            <Button onClick={jumpOut.bind(this,'https://docs.huski.finance')}>Docs</Button>
            <HeadButtonIcon />
            <Button onClick={jumpOut.bind(this,'https://dev.huski.finance')}>Launch App</Button>
          </HeadButton>
          <CloudImg />
          <H4Text>Treat your huskies</H4Text>
          <H4Text>and they will treat you more</H4Text>
          <CloudImg />
        </MobileHeadBlock>
      </>
    );
  }
}

export default MobileHead;

const MobileHeadBlock = styled.div`
  width: 7.5rem;
  height: 15.42rem;
  background-image: url(${MobileHeadImage});
  background-repeat: no-repeat;
  background-size: 7.5rem 15.42rem;
  background-position: 50% 50%;
`;
const LogoBlock = styled(Logo)`
  width: 1rem;
  height: 1.07rem;
  display: block;
  padding: 1rem 0 0.6rem 0;
  margin: 0 auto;
`;
const H3Text = styled.div`
  font-family: "BalooBhaijaan";
  font-weight: 400;
  font-size: 0.48rem;
  line-height: 0.87rem;
  letter-spacing: 0.018em;
  color: #ffffff;
  text-align: center;
  margin-bottom: 0.25rem;
`;

const HeadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.51rem;
`;
const Button = styled.div`
  width: 1.91rem;
  height: 0.76rem;
  background: #ffffff;
  border-radius: 0.16rem;

  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.24rem;
  line-height: 0.24rem;
  color: #7c41e4;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeadButtonIcon = styled(GogPaw)`
  width: 0.36rem;
  height: 0.33rem;
  margin: 0 0.26rem;
`;

const CloudImg = styled(Cloud)`
  width: 5.56rem;
  height: 0.45rem;
  display: block;
  margin: 1.45rem auto;
`;

const H4Text = styled.div`
  font-family: "BalooBhaijaan";
  font-style: normal;
  font-weight: 400;
  font-size: 0.4rem;
  line-height: 0.46rem;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
`;
