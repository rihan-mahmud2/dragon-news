import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <LeftNavbar></LeftNavbar>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightNavbar></RightNavbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
