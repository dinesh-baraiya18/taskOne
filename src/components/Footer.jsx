import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <MainFooter>
      <p>Footer</p>
    </MainFooter>
  );
};

export default Footer;

const MainFooter = styled.footer`
  background: #555;
  text-align: center;
  padding: 15px 0;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
