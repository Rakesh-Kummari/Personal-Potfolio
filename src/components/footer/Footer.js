import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsYoutube } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rakesh Kummari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Rakesh Kummari</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Rakesh-Kummari"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rakesh-kummari-b9028429b/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/rakesh.kummari_?igsh=ZmxiY2FxcmJvbWds"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCdPbw4NpctfK2bR-ni4FHxw"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.google.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
