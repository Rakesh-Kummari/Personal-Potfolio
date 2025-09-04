import React from "react";
import {
  AiOutlineInstagram,
  // AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://www.instagram.com/rakesh.kummari_?igsh=ZmxiY2FxcmJvbWds"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiOutlineInstagram />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.youtube.com/channel/UCdPbw4NpctfK2bR-ni4FHxw"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <BsYoutube />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://github.com/Rakesh-Kummari"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/rakesh-kummari-b9028429b/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
