import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import WebApp from "@twa-dev/sdk";
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";

const Profile = () => {
  const [userId, setUserId] = useState(null);
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI, setOptions] = useTonConnectUI();
  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user;
      setUserId(telegramUserId);
    }
  }, []);

  console.log(userId, "userId");
  return (
    <>
      <div className="outer-mobile-box">
        {/* <Header /> */}
        <section className="">
          <Container>
            <Row>
              <Col>
                <div className="stats-sec ">
                  <ul>
                    <li className="d-block">
                      <div className="inner-user text-center d-block">
                        <h3 className="head-level text-center">
                          Profile Picture
                        </h3>
                        <div className="select-profile">
                          <input type="file" />
                          <button className="">
                            <img
                              src="/assets/images/icons/camera.png"
                              className="img-fluid "
                              alt=""
                            />
                          </button>
                          <img
                            src="/assets/images/icons/tribe-icon.png"
                            className="img-fluid user-profile"
                            alt=""
                          />
                        </div>
                      </div>
                      <Form>
                        <Form.Group
                          className="form-group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your name"
                            value={userId?.first_name}
                            readOnly
                          />
                        </Form.Group>
                        {/* <Form.Group
                          className="form-group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group> */}
                        <Form.Group
                          className="form-group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Ton Wallet Address </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Wallet Address"
                            value={userFriendlyAddress}
                          />
                        </Form.Group>
                        {/* <Form.Group
                          className="form-group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Ton Wallet Address </Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group> */}
                        {/* <Form.Group
                          className="form-group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>X (Twitter) Username </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Twitter user name"
                          />
                        </Form.Group> */}
                        <Form.Group
                          className="form-group"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Telegram Username </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Telegram user name"
                            value={userId?.username}
                            readOnly
                          />
                        </Form.Group>
                      </Form>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
