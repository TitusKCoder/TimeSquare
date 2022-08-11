import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainImg from "../../Assets/mainPic.png";
import TypeWriter from "./TypeWriter";
import Maintwo from "../../Assets/Projects/mainEnd.png";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome To TimeSquare!{" "}
              </h1>
              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={MainImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Chat, Engage, Connect </h1>            
              <Col md={5}>
              <img src={Maintwo} className="home-pic" alt="avatar" />
            </Col>
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
