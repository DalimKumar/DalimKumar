import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMyContext } from "../Context";
const Wrapper = styled.div`
  top: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .sidetext {
    padding-top: 10px;
  }

  .textt {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-size: 24px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
    padding-right: 25px;
  }
  .menuItem {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 100%;
    background: linear-gradient(97.03deg, #00fff1 -27.9%, #ff06c8 132.99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 0px 10px rgba(0, 255, 241, 0.26);
  }

  .active {
    position: relative;
  }
  .active::before {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: linear-gradient(#ff06c8 100%, #5ddeff 100%);
    z-index: 5;
  }
  .sidebar {
    position: absolute;
    width: 320px;
    top: 0;
    left: 0;
    background: #000;
    height: 100vh;
    z-index: 6;

    transform: translateX(-100%);
    transition: 1s;
  }
  .show {
    transform: translateX(0%);
    transition: 1s;
  }
  @media only screen and (max-width: 1199px) {
    .logo {
      width: 150px;
    }
    .menuItem {
      font-size: 20px;
    }

    .account {
      width: 20px;
    }
    .textt {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 991px) {
    .textt {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 576px) {
    .textt {
      font-size: 15px;
      padding-right: 10px;
    }
  }
`;
const Menubar = () => {
  const { navbar, setNavbar } = useMyContext();

  const menubar = [
    { name: "Home", to: "home" },
    { name: "Mint", to: "mint" },
    { name: "Devolve", to: "develve" },
  ];
  return (
    <Wrapper className="px-4  px-lg-5 pt-3 ">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex">
          {!navbar && (
            <>
              <HamburgerIcon />
              <img src="./images/logo.svg" alt="#" className="pb-1 logo" />
            </>
          )}

          <div className="px-3  align-items-center pt-3 d-none d-lg-flex">
            {menubar.map((el, i) => (
              <NavLink
                to={el.to}
                key={i}
                className={({ isActive }) =>
                  isActive ? "active menuItem mx-2" : "inactive menuItem mx-2"
                }
              >
                {el.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="d-flex align-items-center sidetext d-none d-sm-flex">
          <p className="textt px-3">Account: 0x06a8...c34F [0.33 ETH]</p>
          <img src="./images/account.svg" alt="#" className="account" />
        </div>
      </div>

      <div className={`sidebar ${navbar && "show"} px-3 `}>
        <div className="d-flex  align-items-center px-2  pt-3">
          <HamburgerIcon
            className="is-active"
            onClick={() => setNavbar((prev) => !prev)}
          />
          <img src="./images/logo.svg" alt="#" className="pb-1 logo" />
        </div>
        <div className="d-flex flex-column  pt-4 ">
          {menubar.map((el, i) => (
            <NavLink
              to={el.to}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? "active menuItem mx-2 my-3"
                  : "inactive menuItem mx-2 my-3"
              }
            >
              {el.name}
            </NavLink>
          ))}
          <div className="d-flex align-items-center sidetext  d-sm-none">
            <p className="textt ">Account: 0x06a8...c34F [0.33 ETH]</p>
            <img src="./images/account.svg" alt="#" className="account" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Menubar;
