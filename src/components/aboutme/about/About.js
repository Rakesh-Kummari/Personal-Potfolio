import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Rakesh Kummari </b>
                and I am a{" "}
                <b className="purple">Computer Science and Engineering </b>
                student at{" "}
                <b className="purple">
                  Shri Shivaji Vidya Prasarak Sanstha's Bapusaheb Shivajirao
                  Deore College of Engineering Dhule{" "}
                </b>
                in Maharashtra 402103
                <br />
                <br />I am proficient in various programming languages such as
                &nbsp;
                <b className="purple">
                  {" "}
                  Java, Python, HTML, CSS, bootstrap, Talwind, and JavaScript.{" "}
                </b>
                <br />
                <br />I also have experience working with frameworks and
                libraries such as &nbsp;
                <b className="purple"> NodeJS, ReactJS, ExpressJS. </b>
                <br />
                <br />I am experienced in working with databases like{" "}
                <b className="purple"> MySQL and MongoDB.</b> Whenever possible,
                I also channel my passion for building products using modern
                JavaScript libraries and frameworks&nbsp;
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks.
                </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">
                  building new web technologies and products.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
