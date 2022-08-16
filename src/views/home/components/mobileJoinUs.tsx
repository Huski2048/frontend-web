import React from "react";
import styled from "styled-components";

import { ReactComponent as TelegramIcon } from "../../../assets/images/joinus/window/Telegram.svg";
import { ReactComponent as GitHubIcon } from "../../../assets/images/joinus/window/Github.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/joinus/window/Twitter.svg";
import { ReactComponent as MediumIcon } from "../../../assets/images/joinus/window/medium.svg";
import { ReactComponent as YouTubeIcon } from "../../../assets/images/joinus/window/Youtube.svg";
import { ReactComponent as DiscordIcon } from "../../../assets/images/joinus/window/Discord.svg";

class MobileJoinUs extends React.Component {
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
        <JoinUs>
          <Title>Join us</Title>
          <SubTitle>
            Join us on our social media channels for more update & announcement.
          </SubTitle>
          <ContactBlock>
            <ContactButton onClick={jumpOut.bind(this,'https://t.me/HuskiFinance')} >
              <TelegramIcon style={{ width: "0.48rem", height: "0.48rem" }} />
              <ButtonText>Telegram</ButtonText>
            </ContactButton>
            <ContactButton onClick={jumpOut.bind(this,'/')} >
              <GitHubIcon style={{ width: "0.48rem", height: "0.48rem" }} />
              <ButtonText>Github</ButtonText>
            </ContactButton>
            <ContactButton onClick={jumpOut.bind(this,'https://twitter.com/HuskiFinance')} >
              <TwitterIcon style={{ width: "0.48rem", height: "0.48rem" }} />
              <ButtonText>Twitter</ButtonText>
            </ContactButton>
            <ContactButton onClick={jumpOut.bind(this,'https://medium.com/@huskifinance')} >
              <MediumIcon style={{ width: "0.48rem", height: "0.48rem" }} />
              <ButtonText>Medium</ButtonText>
            </ContactButton>
            <ContactButton onClick={jumpOut.bind(this,'https://www.youtube.com/channel/UCNpztgANmzvxhtScQmEh_Og')} >
              <YouTubeIcon style={{ width: "0.48rem", height: "0.48rem" }} />
              <ButtonText>Youtube</ButtonText>
            </ContactButton>
            <ContactButton onClick={jumpOut.bind(this,'https://discord.com/channels/869829725365870592/869829725365870595')} >
              <DiscordIcon style={{ width: "0.48rem", height: "0.48rem" }} />
              <ButtonText>Discord</ButtonText>
            </ContactButton>
          </ContactBlock>
        </JoinUs>
      </>
    );
  }
}

export default MobileJoinUs;

const JoinUs = styled.div``;

const Title = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.28rem;
  line-height: 0.56rem;
  color: #1a1a1f;
  text-align: center;
  margin-top: 0.66rem;
`;

const SubTitle = styled.div`
  width: 6.02rem;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.27rem;
  color: #1a1a1f;
  margin: 0 auto;
  text-align: center;
`;

const ContactBlock = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContactButton = styled.div`
  width: 3.07rem;
  height: 0.8rem;
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid rgba(42, 42, 46, 0.1);
  border-radius: 0.24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const ButtonText = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.24rem;
  line-height: 0.4rem;
  color: #272e35;
  margin-left: 0.16rem;
 
`;
