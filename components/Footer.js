import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
   display: flex;

   width: 100%;

   justify-content: center;
   align-items: center;

   background: white;
`;
const Footer = () => {
   return <StyledFooter>Made by Alp Karavil</StyledFooter>;
};

export default Footer;
