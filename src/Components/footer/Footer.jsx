import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Custom CSS file for styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Address: 123 College Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">Departments</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">&copy; 2024 VNRVJIET. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
