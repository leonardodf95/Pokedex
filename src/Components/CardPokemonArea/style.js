import styled from "styled-components";
import { keyframes } from "styled-components";

export const Area = styled.div`
  @media (min-width: 1500px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    margin: 10px;
  }
  @media (max-width: 1499px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    margin: 10px;
  }
  @media (max-width: 1049px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px;
    justify-items: center;
  }
  @media (max-width: 789px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
    justify-items: center;
  }
  @media (max-width: 533px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 10px;
    justify-items: center;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingAnimation = styled.div`
 
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
export const AreaLoading = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50vh;
`