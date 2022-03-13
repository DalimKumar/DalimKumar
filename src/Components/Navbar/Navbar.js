import React from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  a {
    text-decoration: none;
  }
  .wrapper {
    position: relative;
    padding: 18px 0;
  }

  .changeBackground {
    background: rgba(0, 164, 217, 0.5);
  }
  .link {
    font-family: "Avenir";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 55px;
    cursor: pointer;
    color: #25397b;
    transition: 0.2s;
  }
  .active {
    font-family: "Avenir";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    color: #25397b;
    text-shadow: 0px 4px 40px #1368cb;
    transition: 0.2s;
  }
  .sidebar {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 1);
    padding: 30px 0;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    ]justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .icon {
    position: absolute;
    right: 3%;
    top: 2%;
    color: #fff;
    font-size: 34px;
  }
  .show {
    max-height: 1000;
  }
  .show .link {
    height: auto;
  }
  .hide .link {
    height: 0;
    overflow: hidden;
  }
  .hide {
    max-height: 0px;
    overflow: hidden;
  }

  @media only screen and (max-width: 1500px) {
    .link {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    .changeBackground {
      background: none;
    }
  }
`;
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const navbarArray = [
    { name: "Schedule", to: "schedule" },
    { name: "Faq", to: "faq" },
    { name: "Register", to: "register" },
    { name: "Team", to: "team" },
    { name: "Sponsors", to: "sponsors" },
  ];
  window.addEventListener("scroll", changeBackground);
  return (
    <Wrapper>
      <div className={navbar ? "changeBackground wrapper" : "wrapper"}>
        <Col
          xs={11}
          md={10}
          xl={9}
          xxl={8}
          className="d-flex flex-column justify-content-center mx-auto "
        >
          <div className="d-flex justify-content-end d-md-block">
            <div className="d-none d-md-flex justify-content-between align-items-center">
              {navbarArray.map((el, i) => (
                <Link
                  key={i}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={el.to}
                  activeClass="active"
                  className="link"
                >
                  {el.name}
                </Link>
              ))}
            </div>
            <GiHamburgerMenu
              className={sidebar ? "d-none" : "d-md-none "}
              color="#25397B"
              size={26}
              onClick={() => setSidebar(true)}
            />
            <div className={sidebar ? "sidebar show" : "sidebar hide p-0"}>
              {navbarArray.map((el, i) => (
                <Link
                  key={i}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={el.to}
                  activeClass="active"
                  style={{ color: sidebar && "#fff" }}
                  className="link py-2"
                  onClick={() => setSidebar(false)}
                >
                  {el.name}
                </Link>
              ))}
              <MdClose
                className="icon d-block d-md-none "
                onClick={() => setSidebar(false)}
              />
            </div>
          </div>
        </Col>
      </div>
    </Wrapper>
  );
};
export default Navbar;