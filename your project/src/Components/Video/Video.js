import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
const Wrapper = styled.div`
  .video-container {
    position: relative;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
const Video = () => {
  const [play, setPlay] = useState(false);
  return (
    <Wrapper>
      <Col lg={10} xxl={8} className="mx-auto">
        <div className="w-100 video-container">
          <video width="100%" controls={play} preload="auto">
            <source src="./images/video.mp4" type="video/mp4" />
          </video>
          {!play && (
            <FaPlay
              color="#fff"
              size="30"
              onClick={() => {
                setPlay(true);
                document.querySelector("video").play();
              }}
              className="icon"
            />
          )}
        </div>
      </Col>
    </Wrapper>
  );
};
export default Video;
