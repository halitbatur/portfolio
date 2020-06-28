import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { ReactComponent as ContactUs } from "../../svg/contact.svg";
import "./styles.css";

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col lg={6} md={12} className="m-auto">
          <h2>Contact Me</h2>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control required type="text" placeholder="Email" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control required type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control required type="text" placeholder="Last Name" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                required
                as="textarea"
                rows="3"
                placeholder="Message"
              />
            </Form.Group>
            <button className="button-1" type="submit">
              Send
              <div className="button__horizontal"></div>
              <div className="button__vertical"></div>
            </button>
          </Form>
        </Col>
        <Col lg={6} md={12}>
          <div className="svg-container">
            <ContactUs className="mt-5" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
