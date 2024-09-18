import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const path = useLocation();
  const pathData = path.pathname;
  return (
    <>
      <footer className="footer-main-tribe">
        <Container>
          <Row>
            <Col>
              <div className="footer-links">
                <a
                  onClick={() => {
                    // toast.success("Coming soon");
                    navigate("/level");
                  }}
                  className={pathData == "/level" ? "active" : ""}
                >
                  <div>
                    {pathData == "/level" ? (
                      <img
                        className="golden-img"
                        src="assets/images/mdi_arena-gold.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="white-img"
                        src="assets/images/mdi_arena.png"
                        alt=""
                      />
                    )}
                  </div>
                  Arena
                </a>
                <a
                  className={pathData == "/earn" ? "active" : ""}
                  onClick={() => {
                    // toast.success("Coming soon");
                    navigate("/earn");
                  }}
                >
                  <div>
                    {pathData == "/earn" ? (
                      <img
                        className="golden-img"
                        src="assets/images/fa6-solid_coins-gold.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="white-img"
                        src="assets/images/fa6-solid_coins.png"
                        alt=""
                      />
                    )}
                  </div>
                  Earn
                </a>

                <a
                  onClick={() => {
                    navigate("/");
                  }}
                  className="center-big-img"
                >
                  <img src="assets/images/center-foot.png" alt="" /> Battle
                </a>

                <a
                  className={pathData == "/stats" ? "active" : ""}
                  onClick={() => {
                    toast.success("Coming soon");
                    // navigate("/stats");
                  }}
                >
                  <div>
                    {pathData == "/stats" ? (
                      <img
                        className="golden-img"
                        src="assets/images/ic_round-leaderboard-gold.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="white-img"
                        src="assets/images/ic_round-leaderboard.png"
                        alt=""
                      />
                    )}
                  </div>
                  Stats
                </a>
                <a
                  className={pathData == "/friends" ? "active" : ""}
                  onClick={() => {
                    // toast.success("Coming soon");
                    navigate("/friends");
                  }}
                >
                  <div>
                    {pathData == "/friends" ? (
                      <img
                        className="golden-img"
                        src="assets/images/fa-solid_user-friends-gold.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="white-img"
                        src="assets/images/fa-solid_user-friends.png"
                        alt=""
                      />
                    )}
                  </div>
                  Friends
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
