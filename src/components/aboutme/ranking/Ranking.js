import React from "react";
// import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerearth,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>See my rank</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://www.geeksforgeeks.org/user/rajbabukumijgf/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiGeeksforgeeks />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://leetcode.com/RakeshKummari/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiLeetcode />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.hackerrank.com/profile/rajbabukummari01"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiHackerearth />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.codechef.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiCodechef />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://codeforces.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiCodeforces />
              </Zoom>
            </a>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
