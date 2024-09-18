import React from "react";
import { Col, Container, Dropdown, ProgressBar, Row } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <header className="header-main-tribe">
        <Container>
          <Row>
            <Col>
              <div className="navbar">
                <div className="logo-main-close">
                  <a href="">
                    <img src="assets/images/crose.png" alt="" />
                  </a>
                  <h1>Tonka Tribe</h1>
                </div>
                <div className="dropdown-menu-box">
                  <a href="">
                    <img src="assets/images/down.png" alt="" />
                  </a>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <img src="assets/images/menu.png" alt="" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">
                        <img src="assets/images/bot.png" alt="" /> Open Bot
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <img src="assets/images/loading.png" alt="" /> Reload
                        Page
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <img src="assets/images/share.png" alt="" /> Share
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <img src="assets/images/document.png" alt="" /> Terms of
                        Use
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <img src="assets/images/privacy-policy.png" alt="" />{" "}
                        Privacy Policy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {/* <section>
      <Container>
             <Row>
                 <Col>
                    <div className="user-header-profile">
                        <div className="inner-user">
                            <div>
                                <div className="profile-img">
                                   <img src="assets/images/trible-img.png"  className="img-fluid" alt="" />
                                   <img src="assets/images/trible-img-in.png" className="img-fluid inner-img"  alt="" />
                                </div>
                                <div>
                                    <h3>Welcome <img src="assets/images/welcome-coin.png" alt="" /></h3>
                                    <p>Mayur (Tribal Cheiftan)</p>
                                </div>
                            </div> 
                            <button className="wallet-btn"><img src="assets/images/wallet.png" alt="" /> Connect </button> 
                        </div>
                        <div className="outer-progress-box">
                            <div className="progress-main">
                                <h5>Scout <img src="assets/images/cbi_world-scout-alt.png" alt="" /></h5>
                                <div className="d-flex align-items-center">
                                   <ProgressBar variant="success" now={40} /> 
                                   <img src="assets/images/cbi_world-scout-green.png" height={13} alt="" />
                                </div>
                            </div>
                            <div className="points-box">
                                <img src="assets/images/coin-1.png" className="coin-img" alt="" />
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
    </>
  );
};
