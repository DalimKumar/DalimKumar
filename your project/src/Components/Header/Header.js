import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import {
  BsCaretDownFill,
  BsCaretUpFill,
  BsDiscord,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import styled from "styled-components";
const Wrapper = styled.div`
  padding: 15px 30px;
  font-family: "Geom Graphic";
  a {
    color: #fff;
  }
  .logo {
    width: 120px;
  }
  .myButton {
    display: flex;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

    border: 1px solid var(--blue);
    border-radius: 5px;
    color: var(--blue);
    background: transparent;
    font-size: 22px;

    padding: 12px 40px;
  }
  .myButton:hover {
    transform: scale(0.9);
    transition: 0.3s;
  }
  .overview {
    font-size: 22px;
    color: #fff;
    font-family: "Helvetica Now Display";
    cursor: pointer;
    position: relative;
    font-weight: 500;
  }
  .myDropdown {
    position: absolute;
    font-size: 18px;
    width: 120%;
    background: var(--backgroundColor);
    border-radius: 8px;
    top: 50px;
    height: 0;
    overflow: hidden;
  }
  .anima {
    height: auto;
    animation: show 200ms ease-in-out;
    transition: 100ms ease-in-out;
    transform-origin: left;
    border: 1px solid var(--blue);
    padding: 10px 30px;
  }
  .navItem {
    cursor: pointer;
  }
  .social {
    font-size: 30px;

    padding-left: 18px;
  }
  .social img {
    width: 30px;
  }

  @keyframes show {
    0% {
      opacity: 0;
      transform: scale(0);
    }
  }
  @media only screen and (max-width: 1399px) {
    .myButton {
      padding: 12px 20px;
    }
    .logo {
      width: 105px;
    }
  }
  @media only screen and (max-width: 1050px) {
    .myButton {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 991px) {
    .logo {
      width: 90px;
    }
    .myButton {
      display: none;
    }
    .myDropdown {
      width: 250px;
      top: 60px;
      right: 0%;
    }
    .anima {
      padding: 10px 15px;
    }
  }
  @media only screen and (max-width: 520px) {
    .logo {
      width: 70px;
    }
  }
`;
const Header = () => {
  const [menu, setMenu] = useState(false);
  const overView = [
    {
      navItem: "Gallery",
      to: "gallary",
    },
    {
      navItem: "Launch Map",
      to: "launchmap",
    },
    {
      navItem: "Project Map",
      to: "projectmap",
    },
    {
      navItem: "Sharkpaper",
      to: "sharkpaper",
      sharkpaper: "true",
    },
    {
      navItem: "Team",
      to: "team",
    },
    {
      navItem: "Faq",
      to: "faq",
    },
  ];
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
    <Wrapper data-aos="fade-down">
      <Row className="align-items-center">
        <Col xs={6} lg={3}>
          <img src="./images/logo.png" alt="#" className="logo" />
        </Col>
        <Col lg={3} className="d-none d-lg-flex ">
          <button className="myButton">Connect Wallet</button>
        </Col>
        <Col xs={6} lg={3} className="d-flex justify-content-end">
          <div
            className="overview d-flex align-items-center"
            onClick={() => setMenu((prev) => !prev)}
          >
            <span className="mx-2 d-none d-lg-flex">OVERVIEW</span>
            {menu ? (
              <BsCaretUpFill size="16" className=" d-none d-lg-flex" />
            ) : (
              <BsCaretDownFill size="16" className=" d-none d-lg-flex" />
            )}
            <GiHamburgerMenu className="d-lg-none" size={35} />
            <div
              className={`myDropdown d-flex flex-column justify-content-center align-items-center ${
                menu && "anima"
              }`}
            >
              {overView.map((el, i) => (
                <div key={i}>
                  {!el.sharkpaper && (
                    <Link
                      to={el.to}
                      key={i}
                      className="py-2 d-block navItem"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={() => setMenu(false)}
                    >
                      {el.navItem}
                    </Link>
                  )}
                  {el.sharkpaper && (
                    <a
                      href="https://pokersharksociety.com/static/media/SHARKPAPER.d1560f67.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {el.navItem}
                    </a>
                  )}
                </div>
              ))}
              <div className="d-lg-none">
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
            </div>
          </div>
        </Col>
        <Col lg={3} className="d-none d-lg-flex justify-content-end">
          <div>
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
      </Row>
    </Wrapper>
  );
};
export default Header;
