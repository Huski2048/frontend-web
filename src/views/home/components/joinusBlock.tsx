import React from "react";
import styled from "styled-components";

import JoinUsBackground from "../../../assets/images/joinus/window/JoinusBackground.svg";

import { ReactComponent as TelegramIcon } from "../../../assets/images/joinus/window/Telegram.svg";
import { ReactComponent as GitHubIcon } from "../../../assets/images/joinus/window/Github.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/joinus/window/Twitter.svg";
import { ReactComponent as MediumIcon } from "../../../assets/images/joinus/window/medium.svg";
import { ReactComponent as YouTubeIcon } from "../../../assets/images/joinus/window/Youtube.svg";
import { ReactComponent as DiscordIcon } from "../../../assets/images/joinus/window/Discord.svg";

class JoinUs extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    const jumpOut = (webUrl: any, type: string) => {
      if (type === "_blank") {
        window.open(webUrl);
      } else {
        window.location.href = webUrl;
      }
    };
    return (
      <>
        <JoinUsBlock>
          <JoinUsContent>
            <JoinUsTitle>Join us</JoinUsTitle>
            <JoinUsText>
              Join us on our social media channels for more update &
              announcement.
            </JoinUsText>
            <JoinUsContactBlock>
              <ContactButton
                onClick={jumpOut.bind(
                  this,
                  "https://t.me/HuskiFinance",
                  "_blank"
                )}
              >
                <ButtonIcon>
                  <TelegramIcon
                    style={{ width: "0.48rem", height: "0.48rem" }}
                  />
                </ButtonIcon>
                <ButtonText>Telegram</ButtonText>
              </ContactButton>

              <ContactButton
                onClick={jumpOut.bind(
                  this,
                  "https://github.com/huskifinance",
                  "_blank"
                )}
              >
                <ButtonIcon>
                  <GitHubIcon style={{ width: "0.48rem", height: "0.48rem" }} />
                </ButtonIcon>
                <ButtonText>Github</ButtonText>
              </ContactButton>

              <ContactButton
                onClick={jumpOut.bind(
                  this,
                  "https://twitter.com/HuskiFinance",
                  "_blank"
                )}
              >
                <ButtonIcon>
                  <TwitterIcon
                    style={{ width: "0.48rem", height: "0.48rem" }}
                  />
                </ButtonIcon>
                <ButtonText>Twitter</ButtonText>
              </ContactButton>

              <ContactButton
                onClick={jumpOut.bind(
                  this,
                  "https://medium.com/@huskifinance",
                  "_blank"
                )}
              >
                <ButtonIcon>
                  <MediumIcon style={{ width: "0.48rem", height: "0.48rem" }} />
                </ButtonIcon>
                <ButtonText>Medium</ButtonText>
              </ContactButton>

              <ContactButton
                onClick={jumpOut.bind(
                  this,
                  "https://www.youtube.com/channel/UCNpztgANmzvxhtScQmEh_Og",
                  "_blank"
                )}
              >
                <ButtonIcon>
                  <YouTubeIcon
                    style={{ width: "0.48rem", height: "0.48rem" }}
                  />
                </ButtonIcon>
                <ButtonText>Youtube</ButtonText>
              </ContactButton>

              <ContactButton
                onClick={jumpOut.bind(
                  this,
                  "https://discord.com/channels/869829725365870592/869829725365870595",
                  "_blank"
                )}
              >
                <ButtonIcon>
                  <DiscordIcon
                    style={{ width: "0.48rem", height: "0.48rem" }}
                  />
                </ButtonIcon>
                <ButtonText>Discord</ButtonText>
              </ContactButton>
            </JoinUsContactBlock>
            <RecordTextBlock>
              <RecordText>Copyright © 2021, HuskiFinance</RecordText>
              <RecordTextBlank
                onClick={jumpOut.bind(
                  this,
                  "https://dev.huski.finance/terms-conditions",
                  ""
                )}
              >
                Terms & Conditions
              </RecordTextBlank>
              <RecordTextBlank
                onClick={jumpOut.bind(
                  this,
                  "https://dev.huski.finance/privacy-policy",
                  ""
                )}
              >
                Privacy Policy{" "}
              </RecordTextBlank>
            </RecordTextBlock>
          </JoinUsContent>
        </JoinUsBlock>
      </>
    );
  }
}

export default JoinUs;

const JoinUsBlock = styled.div`
  width: 100%;
  height: 6.99rem;
  margin-top: 0.84rem;
  background: url(${JoinUsBackground});
  background-size: 14.4rem 6.99rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: default;
`;

const JoinUsContent = styled.div`
  padding: 0 1.6rem;
`;

const JoinUsTitle = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 0.48rem;
  line-height: 0.56rem;
  color: #1a1a1f;
  padding-top: 0.36rem;
`;

const JoinUsText = styled.div`
  width: 4.08rem;
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.27rem;
  color: #1a1a1f;
  margin-top: 0.2rem;
`;

const JoinUsContactBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 7rem;
  margin-top: 0.57rem;
`;

const ContactButton = styled.div`
  box-sizing: border-box;
  width: 3.07rem;
  height: 0.8rem;
  background: #ffffff;
  mix-blend-mode: normal;
  display: flex;
  align-items: center;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 0.25rem;
  padding: 0.1rem 0.1rem 0.1rem 0.2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.1rem;
  cursor: pointer;
`;

const ButtonIcon = styled.div`
  margin-right: 0.16rem;
`;

const ButtonText = styled.div`
  font-family: "GenJyuuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  color: #272e35;
`;
const RecordTextBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
`;
const RecordText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.12rem;
  line-height: 0.18rem;
  color: #000000;
  font-family: "GenJyuuGothic";
  margin-right: 1.3rem;
`;

const RecordTextBlank = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.12rem;
  line-height: 0.18rem;
  color: #000000;
  font-family: "GenJyuuGothic";
  margin-right: 1.3rem;
  cursor: pointer;
`;
