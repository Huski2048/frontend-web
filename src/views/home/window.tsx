import React from "react";
import styled from "styled-components";
import HeadBlock from "./components/headBlock";
import FeaturesBlock from "./components/featuresBlock";
import Contracts from "./components/contracts";
import Backed from "./components/backed";
import JoinUs from "./components/joinusBlock";
import SnowIcon from "../../assets/images/home/window/Snow.svg";

class Window extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HeadBlock />
        <SnowBlock src={SnowIcon} />
        <FeaturesBlock />
        <Contracts />
        <Backed/>
        <JoinUs />
      </>
    );
  }
}

export default Window;

const SnowBlock = styled.img`
  display: block;
  position: absolute;
  top: 2rem;
  right: 2rem;
  animation: xuehua 3s linear infinite;

  @keyframes xuehua {
    0% {
        top: 2rem;
        opacity: 1;
    }

    100% {
        top: 4rem;
        opacity: 0;
        transform: rotate(260deg);
    }
  }
`;
