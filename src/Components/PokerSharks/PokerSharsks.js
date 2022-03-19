import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Wrapper = styled.div`
  position: relative;
  .main {
    border: 1px solid var(--blue);
    padding: 50px 15px;
    position: relative;
  }
  .main::before,
  .main::after {
    content: "";
    position: absolute;
    width: 10px;
    background: var(--backgroundColor);
    height: 80%;
    top: 50%;

    transform: translateY(-50%);
  }
  .main::before {
    left: -0.5%;
  }
  .main::after {
    right: -0.5%;
  }

  .title-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    width: 500px;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--backgroundColor);
    padding-inline: 0px;
  }
  .title {
    font-size: 2.25rem;

    z-index: 1;
    padding-inline: 30px;
  }
  .image-container {
    width: 90%;
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(3, 216, 254, 0.32941176470588235);
  }
  .slick-dots li button::before {
    display: none;
  }
  .slick-dots .slick-active {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 0 15px;
    margin-left: 4px;
    background: var(--blue);
  }
  .shark {
    position: absolute;
    top: -30px;
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
      font-size: 2rem;
    }
    .title-container {
      width: 400px;
    }
  }
  @media only screen and (max-width: 767px) {
    .shark {
      display: none;
    }
  }

  @media only screen and (max-width: 520px) {
    .title-container {
      width: 350px;
      top: -45px;
    }
  }
  @media only screen and (max-width: 420px) {
    .title-container {
      width: 200px;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
const PokerSharks = () => {
  const gallary = [
    "./images/gallery-1.png",
    "./images/gallery-2.png",
    "./images/gallery-3.png",
    "./images/gallery-1.png",
    "./images/gallery-2.png",
    "./images/gallery-3.png",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper className="py-5" id="gallary">
      <img src="./images/small_shark.svg" alt="#" className="shark" />
      <Col xs={11} xxl={8} className="mx-auto pb-5">
        <div className="main">
          <div className="title-container">
            <h2 className="title"> POKER SHARKS </h2>
          </div>
          <Slider {...settings}>
            {gallary.map((el, i) => (
              <div key={i}>
                <div className="image-container">
                  <img src={el} alt="#" className="w-100 " />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Col>
    </Wrapper>
  );
};
export default PokerSharks;
