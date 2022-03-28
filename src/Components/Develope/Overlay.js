import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div``;
const Overlay = ({ zoombify }) => {
  return (
    <Wrapper>
      <div className="zoombie d-flex justify-content-center align-items-center">
        <span className="zoombie-text d-block">
          {zoombify ? "ZOOMBIFY" : "BURN"}
        </span>
      </div>
    </Wrapper>
  );
};
export default Overlay;
