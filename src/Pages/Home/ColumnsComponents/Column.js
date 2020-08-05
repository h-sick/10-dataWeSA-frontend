import React from "react";
import styled from "styled-components";
import theme, { flexCenter } from "../../../Styles/Theme";

const Column = (props) => {
  const { colum } = props;
  return (
    <ColumnContainer colum={colum}>
      <div className="bg">{colum}</div>
    </ColumnContainer>
  );
};

const ColumnContainer = styled.div`
  width: 231px;
  height: 131px;
  font-size: 18px;
  margin: 15px auto;
  text-align: center;
  background-image: url("images/Home/Colums/${(props) => props.colum}.jpg");
  background-size: 100% 100%;
  border: 1px solid white;
  cursor: pointer;

  &:hover {
    animation: 0.7s showBig alternate infinite;
  }

  .bg {
    width: 229px;
    height: 129px;
    position: absolute;
    ${flexCenter};
    background-color: rgba(0, 0, 0, 0.5);
    background-position: 50% 50%;
    color: ${theme.white};


  }

  @keyframes showBig {
    0% {
      background-size: 100% 100%;
      background-position: 50% 50%;
      font-size: 18px;
    }
    
    100% {
      background-size: 150% 150%;
      background-position: 50% 50%;
      font-size: 21px;
    }
  }
`;

export default Column;