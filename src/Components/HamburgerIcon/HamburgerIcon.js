import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useMyContext } from "../Context";
const Wrapper = styled.div`
  .hamburger .line {
    width: 25px;
    height: 3px;
    background: linear-gradient(to right, #ff06c8 0%, #00fff1 100%);
    display: block;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-right: 25px;
  }
  .is-active .line {
    height: 5px;
    margin: 8px auto;
    margin-right: 25px;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  /* ONE */

  #hamburger-1.is-active .line:nth-child(2) {
    opacity: 0;
  }

  #hamburger-1.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  #hamburger-1.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }
`;
const HamburgerIcon = ({ className }) => {
  const { setNavbar } = useMyContext();
  // const setHamburger = () => {
  //   const hamburger = document.querySelector(".hamburger");
  //   hamburger.classList.toggle("is-active");
  // };
  return (
    <Wrapper onClick={() => setNavbar((prev) => !prev)} className="d-lg-none">
      <div className={`hamburger pt-2 ${className}`} id="hamburger-1">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </Wrapper>
  );
};
export default HamburgerIcon;
