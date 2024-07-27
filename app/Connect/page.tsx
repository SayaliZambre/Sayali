"use client";

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import Image from 'next/image'; // Import the Image component
import styles from './Connect.module.css';

const Connect = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ message: '', success: false });
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className={styles.contact} id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className={styles.imageCol}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Image
                    className={styles.contactImage}
                    src="/contactImg.png"
                    alt="Contact Us"
                    width={500}
                    height={500}
                    layout="intrinsic" // Use "intrinsic" for Next.js 12 or "fill" for Next.js 13 and later
                  />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className={styles.formCol}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""} ${styles.formContainer}`}>
                  <h2 className={styles.contactTitle}>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          className={styles.contactInput}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          className={styles.contactInput}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          className={styles.contactInput}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          className={styles.contactInput}
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          className={styles.contactInput}
                        ></textarea>
                        <button type="submit" className={styles.contactButton}><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col xs={12}>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Connect;
