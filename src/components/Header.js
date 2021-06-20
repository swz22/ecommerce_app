import React from 'react';
import Navbar from './Navbar' ;
import styled from "styled-components";

function Header () {
  return (
    <HMain>
      <HTop>
        <HTopLogo>
          <HLogo a href="/">JK'S AWESOME STORE</HLogo>
        </HTopLogo>
        <HTopNavbar>
          <HTopNavigation>
            <Navbar />
          </HTopNavigation>
          <HTopSeparator />
        </HTopNavbar>
      </HTop>
    </HMain>
  )
}

const HMain = styled.section`
    margin-top: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const HTop = styled.section`
    display: flex;
    width: 100%;
    height: 80px;
`;

const HTopLogo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const HLogo = styled.a`
    color: inherit;
    text-decoration: inherit;
    font-family:system-ui;
    font-size: 80px;
`

const HTopNavbar = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const HTopNavigation = styled.section`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 55px;
`;

const HTopSeparator = styled.hr`
    width: 100%;
    border: none;
    height: 2px;
    margin-top: 2px;
    background-color: black;
`;

export default Header;