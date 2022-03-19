import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { BsDiscord, BsTwitter, BsInstagram } from "react-icons/bs";
const Wrapper = styled.div`
  background: #000b14;
  a {
    color: #fff;
  }
  .logo {
    width: 90px;
  }
  .termsAndCondition {
    font-size: 20px;
    font-weight: 500;
  }
  .social {
    font-size: 30px;

    padding-left: 18px;
  }
  .social img {
    width: 30px;
  }
  .text {
    font-weight: 500;
  }
  @media only screen and (max-width: 991px) {
    .termsAndCondition {
      font-size: 16px;
      font-weight: 500;
    }
    .social {
      font-size: 24px;

      padding-left: 14px;
    }
    .social img {
      width: 24px;
    }
    .text {
      font-size: 14px;
    }
  }
`;
const Footer = () => {
  const socialArray = [
    {
      icon: <BsDiscord />,
      to: "https://discord.com/invite/nFXwFjfff7",
    },
    {
      icon: <BsTwitter />,
      to: "https://twitter.com/2222sharks",
    },
    {
      icon: <BsInstagram />,
      to: "https://www.instagram.com/pokersharksociety/",
    },
    {
      icon: <img src="./images/opensea.svg" alt="#" />,
      to: "https://opensea.com/",
    },
  ];
  return (
    <Wrapper className="py-4">
      <Col
        xs={11}
        xxl={8}
        className="mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <div className="termsAndCondition">
          <a
            href="https://pokersharksociety.com/static/media/Terms%20_%20Conditions.9c6249c1.pdf"
            target="_blank"
            rel="noreferrer"
          >
            TERMS & CONDITIONS
          </a>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-4 my-md-0">
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <p className="text text-center pt-2">
            © 2022 PokerSharkSociety All Rights Reserved
          </p>
        </div>
        <div className="d-none d-md-flex">
          {socialArray.map((el, i) => (
            <a
              href={el.to}
              targer="_blank"
              rel="noreferrer"
              className="social"
              key={i}
            >
              {el.icon}
            </a>
          ))}
        </div>
      </Col>
    </Wrapper>
  );
};
export default Footer;
