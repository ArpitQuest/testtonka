import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import UserData from "../Components/UserData";

const Stats = () => {
  return (
    <>
      <div className="outer-mobile-box">
        {/* <Header /> */}
        <UserData/>
        {/* <section>
          <Container>
            <Row>
              <Col>
                <div className="user-header-profile">
                  <div className="inner-user">
                    <div>
                      <div className="profile-img">
                        <img
                          src="assets/images/trible-img.png"
                          className="img-fluid"
                          alt=""
                        />
                        <img
                          src="assets/images/trible-img-in.png"
                          className="img-fluid inner-img"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3>
                          Welcome{" "}
                          <img src="assets/images/welcome-coin.png" alt="" />
                        </h3>
                        <p>Mayur (Tribal Cheiftan)</p>
                      </div>
                    </div>
                    <button className="wallet-btn">
                      <img src="assets/images/wallet.png" alt="" /> Connect{" "}
                    </button>
                  </div>
                  <div className="outer-progress-box">
                    <div className="progress-main">
                      <h5>
                        Scout{" "}
                        <img
                          src="assets/images/cbi_world-scout-alt.png"
                          alt=""
                        />
                      </h5>
                      <div className="d-flex align-items-center">
                        <ProgressBar variant="success" now={40} />
                        <img
                          src="assets/images/cbi_world-scout-green.png"
                          height={13}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="points-box">
                      <img
                        src="assets/images/coin-1.png"
                        className="coin-img"
                        alt=""
                      />
                      <div>
                        <h3>War Points</h3>
                        <p>2300</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <section className="">
          <Container>
            <Row>
              <Col>
                <div className="stats-sec mt-3">
                  <ul>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/tribe-icon.png"
                          className="img-fluid user-profile"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>
                            <img
                              src="/assets/images/icons/tribe-user.png"
                              className="img-fluid"
                              alt=""
                            />
                            User ID:203847
                          </h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            2300
                          </p>
                        </div>
                      </div>
                      <div>
                        <h2>1</h2>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/tribe-icon.png"
                          className="img-fluid user-profile"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>
                            <img
                              src="/assets/images/icons/tribe-user.png"
                              className="img-fluid"
                              alt=""
                            />
                            User ID:203847
                          </h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            2300
                          </p>
                        </div>
                      </div>
                      <div>
                        <h2>2</h2>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/tribe-icon.png"
                          className="img-fluid user-profile"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>
                            <img
                              src="/assets/images/icons/tribe-user.png"
                              className="img-fluid"
                              alt=""
                            />
                            User ID:203847
                          </h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            2300
                          </p>
                        </div>
                      </div>
                      <div>
                        <h2>3</h2>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/tribe-icon.png"
                          className="img-fluid user-profile"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>
                            <img
                              src="/assets/images/icons/tribe-user.png"
                              className="img-fluid"
                              alt=""
                            />
                            User ID:203847
                          </h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            2300
                          </p>
                        </div>
                      </div>
                      <div>
                        <h2>4</h2>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/tribe-icon.png"
                          className="img-fluid user-profile"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>
                            <img
                              src="/assets/images/icons/tribe-user.png"
                              className="img-fluid"
                              alt=""
                            />
                            User ID:203847
                          </h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            2300
                          </p>
                        </div>
                      </div>
                      <div>
                        <h2>5</h2>
                      </div>
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

export default Stats;
