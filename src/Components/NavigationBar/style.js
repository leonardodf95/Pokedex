import styled from "styled-components";

export const NavigationBar = styled.nav`
  background-color: #29373d;
  height: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: 120px 300px;  
  @media (max-width: 500px) {
    grid-template-columns: 120px 200px;
    align-items: center;
  }  
`;
export const Logo = styled.img`
  height: 50px;
  width: 110px;
  transition: 0.15s transform ease;
  transform: scale(1);
  margin: 0 0 0 10px;
  &:hover {
    transform: scale(1.1);
  }
`;
