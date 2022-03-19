import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  .main {
    position: relative;
  }
  .title {
    font-size: 3.75rem;
    font-style: italic;
  }
  .text {
    font-size: 1.25rem;
    line-height: 180%;
    font-weight: 500;
  }
  .image-container {
    width: 100%;
    padding: 20px 20px 80px 20px;
  }
  .nameAndPositon {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid var(--blue);
    padding: 6px 0;
    background: var(--backgroundColor);
    text-align: center;
    width: 80%;
  }
  .name {
    font-size: 2rem;
    color: var(--white);
    font-family: "Geom Graphic";
    line-height: 100%;
  }
  .text {
    font-size: 1rem;
  }
  .shark {
    position: absolute;
    top: 22%;
    left: -10%;
    mix-blend-mode: color-dodge;
  }
  @media only screen and (max-width: 1399px) {
    .shark {
      width: 300px;

      left: -3%;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2.75rem;
    }
    .name {
      font-size: 1.75rem;
    }
    .nameAndPositon {
      bottom: -33px;
    }
  }
  @media only screen and (max-width: 767px) {
    .name {
      font-size: 1.5rem;
    }
    .nameAndPositon {
      bottom: -33px;
    }
    .shark {
      top: 11%;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 2.25rem;
    }
    .name {
      font-size: 1.2rem;
    }
    .text {
      font-size: 0.8rem;
    }
    .nameAndPositon {
      bottom: -27px;
    }
  }
`;
const Team = () => {
  const teamArray = [
    {
      img: "./images/pipolino.png",
      name: "@_pipolinio_",
      position: "Co-Founder/ Marketing",
      to: "https://www.instagram.com/_pipolinio_/",
    },
    {
      img: "./images/angryphil.png",
      name: "@shark_phil",
      position: "Co-Founder/ Administration",
      to: "https://www.instagram.com/shark_phil/",
    },
    {
      img: "./images/gamepainpapi.png",
      name: "@sharksabigfish",
      position: "Co-Founder/ Management",
      to: "https://www.instagram.com/sharksabigfish/",
    },
    {
      img: "./images/krishanmalviya.png",
      name: "@krish",
      position: "Artwork",
    },
  ];
  return (
    <Wrapper id="team">
      <img src="./images/small_shark.svg" alt="#" className="shark" />
      <Col xs={11} xxl={8} className="mx-auto ">
        <h2 className="title">
          MEET THE TEAM<span className="exlamation">!</span>
        </h2>
        <Row className="align-items-center justify-content-center">
          {teamArray.map((el, i) => (
            <Col
              xs={11}
              sm={8}
              md={5}
              key={i}
              className="d-flex justify-content-center align-items-center my-5"
            >
              <div className="main">
                <div className="image-container">
                  <img src={el.img} alt="#" className="image" />
                </div>
                <div className="nameAndPositon">
                  <a
                    className="name"
                    href={el.to ? el.to : "#"}
                    target={el.to && "_target"}
                    style={{ cursor: !el.to && "text" }}
                  >
                    {el.name}
                  </a>
                  <p className="position text">{el.position}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Wrapper>
  );
};
export default Team;
