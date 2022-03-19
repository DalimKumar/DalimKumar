import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  font-family: "Geom Graphic";
  font-family: "Helvetica Now Display";
`;
const Basic = () => {
  return (
    <Wrapper>
      <Col xxl={8} className="mx-auto">
        <Row className="align-items-center">
          <Col md={6}></Col> <Col md={6}></Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default Basic;
