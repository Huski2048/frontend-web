import React from "react";
import styled from "styled-components";

class MobileFoot extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Foot>
          <Line>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </Line>
          <Line>
            <div style={{ textAlign: 'center'}}>Copyright © 2021, HuskiFinance</div>
          </Line>
        </Foot>
      </>
    );
  }
}

export default MobileFoot;

const Foot = styled.div`
  background: #2c353d;
  padding: 0.33rem 0.5rem;
`;

const Line = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.18rem;
  line-height: 0.27rem;
  font-feature-settings: "liga" off;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;
