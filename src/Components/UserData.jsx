import React, { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import WebApp from "@twa-dev/sdk";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import level_Data from "../JSON/Point.json";
const levelData = level_Data.levelData;

const UserData = () => {
  const navigate = useNavigate();

  const { level_name } = useAuth();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user;
      setUserId(telegramUserId);
    }
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (levelData?.length > 0) {
      const filterData = levelData?.filter((items, index) => {
        return items.name == level_name;
      });
      setCount(filterData[0]?.number);
    }
  }, []);
  const percentage = (count / 12) * 100;
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="user-header-profile">
                <div className="inner-user">
                  <div>
                    <div
                      className="profile-img"
                      onClick={() => navigate("/profile")}
                    >
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
                      <p>{userId ? userId?.first_name : ""}</p>
                    </div>
                  </div>
                  <TonConnectButton className="wallet-btn" />
                  {/* <button className="wallet-btn">
                    <img src="assets/images/wallet.png" alt="" /> Connect{" "}
                  </button> */}
                </div>
                <div className="outer-progress-box">
                  <div className="progress-main">
                    <a onClick={() => navigate("/level")}>
                      <h5>
                        {level_name}
                        <img
                          src="assets/images/cbi_world-scout-alt.png"
                          alt=""
                        />{" "}
                        &nbsp; &nbsp;
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </h5>
                    </a>
                    <div className="d-flex align-items-center">
                      <ProgressBar variant="success" now={percentage} />
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
                      <p>0</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default UserData;
