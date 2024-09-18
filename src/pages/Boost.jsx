import React, { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row, Modal } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import UserData from "../Components/UserData";
import axiosMain from "../http/axios/axios_main";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import WebApp from "@twa-dev/sdk";

export const Boost = () => {
  //======================Local Varibales =====================//
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showtap, setShowTap] = useState(false);
  const [tapdata, setTapData] = useState("");
  const [userId, setUserId] = useState(null);
  // const [userId, setUserId] = useState({
  //   id : "877338099",
  //   first_name : "harshal"
  // });
  //======================End of code=====================//

  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user;
      setUserId(telegramUserId);
    }
  }, []);

  console.log(tapdata, "tapdata");
  const handleClosetap = () => {
    setShowTap(false);
  };

  const handleClose = () => {
    setShow(false);
  };
  //======================get data for tap=====================//
  useEffect(() => {
    if (userId?.id) {
      HandleTap();
    }
  }, [userId?.id]);

  const HandleTap = async (e) => {
    try {
      const payload = {
        id: userId?.id,
      };
      const response = await axiosMain.post("/tap/next", payload);
      console.log(response, "response");

      if (response?.data?.status) {
        setTapData(response?.data?.data);
        console.log(response, "grtrt");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //======================End of code=====================//

  //======================post api for tap sepend=====================//
  const HandleSubmit = async (e) => {
    try {
      const payload = {
        userId: userId?.id,
        spend: tapdata?.spend,
      };
      const response = await axiosMain.post("/tap/spend", payload);
      console.log(response, "response");

      if (response?.data?.status) {
        // setTapData(response?.data?.data);
        console.log(response, "ppppp");
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  //======================End of code=====================//

  //======================post api for instant refill=====================//
  const HandleInstantRefill = async (e) => {
    try {
      const payload = {
        userId: userId?.id,
      };
      const response = await axiosMain.post("/tap/booster", payload);
      console.log(response, "response");

      if (response?.data?.status) {
        // setTapData(response?.data?.data);
        console.log(response, "ppppp");
        toast.success(response.data.message);
        navigate("/", { state: { flag: true } });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  //======================End of code=====================//

  return (
    <>
      <div className="outer-mobile-box">
        {/* <Header /> */}
        <section className="boost-sec">
          <Container>
            <Row>
              <Col>
                <div className="tribe-user-profile">
                  <img
                    src="/assets/images/shield.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="tribe-main-home">
                  <h3 className="text-center mb-4">Daily Boost</h3>
                </div>
                <div className="stats-sec">
                  <ul>
                    <li>
                      <div className="inner-user">
                        <div className="user-detail">
                          <h3>Taps +1</h3>
                          <h4>
                            {tapdata?.spend} for {tapdata?.points} point per tap
                          </h4>
                        </div>
                      </div>
                      <div>
                        <div className="refer-friend-box copy mb-1 boost-padding">
                          <div className="user-detail">
                            <p
                              className="text-center d-flex align-items-center font-16"
                              onClick={() => {
                                setShowTap(true);
                              }}
                            >
                              <img
                                src="/assets/images/icons/refer-coin.svg"
                                className="img-fluid"
                                alt=""
                              />
                              +{tapdata?.spend}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <div className="user-detail">
                          <h3>Instant Refill</h3>
                          <h4>Daily : {tapdata?.dailyUsed} / 5</h4>
                        </div>
                      </div>
                      <div>
                        <div className="refer-friend-box copy mb-1 boost-padding">
                          <div className="user-detail">
                            <p
                              className="text-center d-flex align-items-center font-16"
                              onClick={() => {
                                setShow(true);
                              }}
                            >
                              <img
                                src="/assets/images/icons/refer-coin.svg"
                                className="img-fluid"
                                alt=""
                              />
                              +5000
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <div className="inner-user">
                        <div className="user-detail">
                          <h3>Taps +1k</h3>
                          <h4>Expires In 1 Day</h4>
                        </div>
                      </div>
                      <div>
                        <div className="refer-friend-box copy mb-1 boost-padding">
                          <div className="user-detail">
                            <p className="text-center d-flex align-items-center font-16">
                              <img
                                src="/assets/images/icons/refer-coin.svg"
                                className="img-fluid"
                                alt=""
                              />
                              +2300
                            </p>
                          </div>
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
        <Modal size="md" centered show={show} onHide={handleClose} className="common-modal">
          <Modal.Header closeButton>
            {" "}
            <h4 className="sub-heading mt-1">Instant Refill</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="connect-tech-div text-center">
              <div className="radio-check-row">
                <p>You have to spend 5000 for Instant Refill</p>
              </div>{" "}
              <div className="text-center mt-2">
              <button
                className="wallet-btn w-100"
                onClick={() => HandleInstantRefill()}
              >
                Go Ahead
              </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal size="md" centered show={showtap} onHide={handleClosetap} className="common-modal">
          <Modal.Header closeButton>
            {" "}
            <h4 className="sub-heading mt-1">Multitap</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="connect-tech-div text-center">
              <div className="radio-check-row">
                <p>Increase the amount of coins you can earn per tap</p>
                <p>
                  {tapdata?.spend} for {tapdata?.points} coins for per tap{" "}
                </p>
              </div>{" "}
              <button
                className="wallet-btn w-100"
                onClick={() => {
                  HandleSubmit();
                }}
              >
                Go Ahead
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
