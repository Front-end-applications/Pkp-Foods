import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  background: white;
  letter-spacing: 0.1rem;
`;

export const Inner = styled.div`
  padding: 3rem;
  width: 90%;
`;

export const Body = styled.div`
  display: flex;
  gap: 3rem;
`;

export const SideBar = styled.div`
  margin-bottom: 1rem;
  flex: 1;
  border: 1px solid #C86F45;
  padding: 2rem 2.5rem;

  .active {
    border-left: 4px solid #C86F45;
  }
`;

export const SideBarLinks = styled(ReactRouterLink)`
  padding: 0 0 0 0.5rem;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  color: black;
  margin: 2rem 0;

  :hover {
    color: #C86F45;
  }
`

export const Button = styled.button`
  
`;

export const MainContent = styled.div`
  margin-bottom: 1rem;
  flex: 5;
`;

export const Header = styled.div`
  display: flex;
  margin: 0 0 2rem;
  align-items: center;
  gap: 1.5rem;
`;

export const HeaderImage = styled.img`
  flex: 1;
`;

export const HeaderContent = styled.div`
  flex: 4;
`;

export const UserName = styled.h2`
  margin: 0;
  padding: 2rem 0 0;
  color: #C86F45;
`;

export const UserMail = styled.p``;

export const HorizontalRule = styled.hr`
  border: 2px solid  #C86F45;
  border-bottom: none;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
`;

export const Card = styled(ReactRouterLink)`
  display: inline-block;
  padding: 2rem;
  text-decoration: none;
  color: black;
  text-align: center;
  box-shadow: 5px 5px 15px #00000030;

  :hover {
    cursor: pointer;
    box-shadow: 5px 5px 15px #00000050;
  }
`;

export const CardIcon = styled.div`
  color: #C86F45;
  font-size: 3rem;
`;

export const CardTitle = styled.h2`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const CardDesc = styled.div`
  font-size: 1rem;
`;

export const CardInfo = styled.p`
  margin: 1.5rem 0 0;
  font-weight: bold;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #C86F45;
`;

