import React from "react";
import styled from "styled-components";
import DailyChart from "./DailyChart";

function Daily() {
  return (
    <DailyWrapper>
      <DailyContainer>
        <DailyInfo>
          <div className="title">Daily New Cases</div>
          <div className="subTitle">
            <SpanSubTitle>Y-AXIS SCALE</SpanSubTitle>
            <div className="wrapper">
              <Button>Linear</Button>
              <Button>Logarithmic</Button>
            </div>
          </div>
          <div className="subTitle">
            <SpanSubTitle>INDICATOR</SpanSubTitle>
            <div className="wrapper">
              <Select>
                <option>Daily New Cases</option>
                <option>Confirmed Cases</option>
                <option>Deaths</option>
                <option>Hospitalizations</option>
                <option>Tests</option>
                <option>% Positive Tests</option>
              </Select>
            </div>
          </div>
          <div className="checkBoxes">
            <div>
              <input type="checkbox" />
              7-day Rolling Average
            </div>
            <div>
              <input type="checkbox" />
              Per Capita
            </div>
            <div>
              <input type="checkbox" />
              Shift Time Axis
            </div>
            <div>
              <input type="checkbox" disabled="true" />
              International Comparison
            </div>
          </div>
          <div className="content">
            Because of the exponential nature of early epidemic spreading, it is important to track
            not only the total number of COVID-19 cases, but their growth.
          </div>
          <div className="content">
            This chart presents the number of new cases reported daily by each U.S. state.
          </div>
          <div className="smallContent">
            For more information about the difference between linear and logarithmic scale,{" "}
            <SpanUnderline>click here.</SpanUnderline>
          </div>
          <div className="smallContent">
            Data from{" "}
            <SpanUnderline>the COVID Tracking Project Coronavirus numbers by state.</SpanUnderline>
          </div>
        </DailyInfo>
        <DailyChart />
      </DailyContainer>
    </DailyWrapper>
  );
}

export default Daily;

const DailyWrapper = styled.div`
  background-color: ${(props) => props.theme.midgrey};
`;

const DailyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 4%;
  padding-bottom: 5%;
`;

const DailyInfo = styled.div`
  width: 22%;
  height: 30%;
  margin-right: 2%;
  .title {
    font-family: ${(props) => props.theme.fontTitle};
    font-size: 30px;
    margin-bottom: 10px;
  }
  .subTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
    height: 30px;

    .wrapper {
      width: 70%;
      height: 100%;
    }
  }
  .checkBoxes {
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.orange};

    div {
      margin: 0 0 2% 30%;
    }
  }
  .content {
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 5%;
    font-family: ${(props) => props.theme.fontContent};
  }
  .smallContent {
    font-size: 11px;
    margin-bottom: 4%;
    color: grey;
  }
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid grey;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
`;

const SpanSubTitle = styled.span`
  font-size: 13px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontContent};
`;

const SpanUnderline = styled.span`
  text-decoration: underline;
  color: ${(props) => props.theme.black};
  cursor: pointer;
`;
