import React from "react";
import styled from "styled-components";

import MobileHead from "./components/mobileHead";
import MobileFeatures from "./components/mobileFeaturesBlock";
import MobileFinance from "./components/mobileFinanceBlock";
import MobileContracts from "./components/mobileContracts";
import MobileBacked from "./components/mobileBacked";
import MobilePartners from "./components/mobilePartners";
import MobileJoinUs from "./components/mobileJoinUs";
import MobileFoot from "./components/mobileFoot";

class Mobile extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <MobileHead />
        <MobileFeatures />
        <MobileFinance />
        <MobileContracts />
        <MobileBacked />
        <MobilePartners />
        <MobileJoinUs />
        <MobileFoot />
      </>
    );
  }
}

export default Mobile;
