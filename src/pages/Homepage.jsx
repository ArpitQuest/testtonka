import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Col,
  Container,
  ProgressBar,
  Row,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axiosMain from "../http/axios/axios_main";
import { io } from "socket.io-client";
import UserData from "../Components/UserData";
import WebApp from "@twa-dev/sdk";
import { useSocket } from "../Components/Socket";
import { useDispatch } from "react-redux";
import { levelName, setAdminprofileData } from "../store/reducers/authReducer";
import toast from "react-hot-toast";

const Homepage = () => {
  //======================GLobal Varibales =====================//
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const socket = useSocket();
  const { state } = useLocation("");
  const { flag } = state || "";
  console.log("searchParams", searchParams.get("start"));

  const [param, setParam] = useState(null);

  // useEffect(() => {
  //   // Get URL parameters
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const startParam = queryParams.get('start');
  //   if (startParam) {
  //     setParam(startParam);
  //   }
  // }, []);
  console.log("param" , param);
  

  //======================End of Code=====================//
  // console.log(flag, "flag");
  //======================Local Varibales =====================//
  const [points, setPoints] = useState(1);
  const [totaldaypoints, setTotalDayPoints] = useState(0);
  const [show, setShow] = useState(false);
  const [levelname, setLevelName] = useState("");
  const [userId, setUserId] = useState(null);

  // const [userId, setUserId] = useState({
  //   id: "1578426474",
  //   first_name: "Arpit",
  // });

  const [inputReferral, setInputRefeffal] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [extraState, setExtraState] = useState(0);

  useEffect(() => {
    if (flag) {
      setMinutes(5);
    }
  }, [flag]);
  //========= =============End of Code=====================//
  // console.log(minutes, "minutes");
  // console.log(seconds, "seconds");

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(timerInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [minutes, seconds]);
  // useEffect(() => {
  //   const loginData = localStorage.getItem("loginOne");
  //   console.log(loginData);
  //   if (loginData == "true") {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // }, []);

  useEffect(() => {
    if(WebApp.initDataUnsafe){
      setParam(WebApp.initDataUnsafe.start_param)
      console.log("unsafe" , WebApp.initDataUnsafe.start_param);
    }
    
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user;
      setUserId(telegramUserId);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    if (userId?.id) {
      checkUser();
    }
  }, [userId?.id]);

  const checkUser = async () => {
    try {
      const payload = {
        id: userId?.id,
      };
      const checkData = await axiosMain.post("/user/check", payload);
      if (checkData?.data?.status) {
        // console.log("checkData", checkData);

        if (checkData?.data?.data?.isUserExist) {
          HandelLogin("skip");
        } else {
          setShow(true);
        }
      }
    } catch (err) {}
  };

  //======================Handle card tap=====================//
  const handleCardClick = (e) => {
    if (extraState <= 1) {
    } else {
      handleDisplayFlyingEmoji();
      socket.on(`tapped`, (data) => {
        setPoints(data?.data?.points);
        setLevelName(data?.data?.name);
        dispatch(levelName(data?.data?.name));
      });

      socket.on(`points`, (data) => {
        setExtraState(data?.data);
        setTotalDayPoints(data?.data);
      });
      socket.emit(`tap`, (data) => {});

      return () => {
        socket.disconnect();
      };
    }
  };
  //======================End of Code=====================//

  //======================telegram id fetch =====================//

  const HandelLogin = async (data) => {
    if (data == "referral" && !inputReferral) {
      toast.error("Please enter referral code or skip");
    } else {
      const payload = {
        id: userId?.id,
        first_name: userId?.first_name,
        referByCode: data == "referral" ? inputReferral : "",
      };
      try {
        const loginObj = await axiosMain.post("/user", payload);
        if (loginObj?.data?.status) {
          // console.log("loginObj", loginObj);
          dispatch(setAdminprofileData(loginObj?.data?.data));
          setPoints(loginObj?.data?.data?.points);
          setLevelName(loginObj?.data?.data?.name);
          setTotalDayPoints(loginObj?.data?.data?.currentTimePoints);
          setExtraState(loginObj?.data?.data?.currentTimePoints);
          dispatch(levelName(loginObj?.data?.data?.name));
          handleClose();
        }
      } catch (err) {}
    }
  };

  const overlayRef = useRef(null);

  // Function to remove emoji node after animation
  const handleRemoveFlyingEmoji = useCallback((node) => {
    if (!overlayRef.current) return;
    overlayRef.current.removeChild(node);
  }, []);

  // Function to display a flying emoji at a random position
  const handleDisplayFlyingEmoji = useCallback(
    (emoji) => {
      if (!overlayRef.current) return;

      const node = document.createElement("div");
      node.className = "emoji fly";

      // Emoji content
      node.textContent = 1;
      node.style.position = "absolute";
      node.style.color = "#FFF";
      node.style.left = `${Math.random() * 90}%`; // Random horizontal position
      node.style.top = `${Math.random() * 90}%`; // Random vertical position
      overlayRef.current.appendChild(node);

      // Remove the emoji after the animation ends
      node.addEventListener("animationend", () => {
        handleRemoveFlyingEmoji(node);
      });
    },
    [handleRemoveFlyingEmoji]
  );

  useEffect(() => {
    return () => {
      if (overlayRef.current) {
        overlayRef.current.childNodes.forEach((node) => {
          node.removeEventListener("animationend", handleRemoveFlyingEmoji);
        });
      }
    };
  }, [handleRemoveFlyingEmoji]);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="outer-mobile-box position-relative">
        {/* <Header /> */}
        <UserData />
        <section className="home-center-set">
          <Container>
            <Row>
              <Col>
                <div className="">
                  <h4
                    className="task-heading mt-3"
                    onClick={() => {
                      navigate("/earn");
                    }}
                  >
                    Today’s Tasks <span>0/3</span>{" "}{param}
                    <img src="assets/images/right-arrow.png" alt="" />
                  </h4>
                  <div className="text-center m-5 tribe-main-home">
                    <h3>
                      <img src="assets/images/tonka-point.png" alt="" /> Tonka :{" "}
                      <span>{points}</span>
                    </h3>
                    {/* <a href="" className="d-block"> */}
                    <div className="home-image">
                      <div>
                        <div className="overlay-numbers" ref={overlayRef}></div>
                      </div>
                      <img
                        src="assets/images/main-home.png"
                        className="img-fluid tribe-main"
                        alt=""
                        onClick={() => {
                          handleCardClick();
                          // handleClick()
                        }}
                        onContextMenu={handleContextMenu}
                      />
                    </div>
                    {/* </a> */}
                  </div>
                  <div className="position-set-bottom">
                    <div className="d-flex align-items-center justify-content-between battery-boost-row">
                      <p>
                        <img src="assets/images/battery.png" alt="" />
                        {minutes === 0 && seconds === 0
                          ? `${totaldaypoints} / 5000`
                          : `${minutes < 10 ? `0${minutes}` : minutes}:${
                              seconds < 10 ? `0${seconds}` : seconds
                            }`}
                        {/* {totaldaypoints  }/ 5000 */}
                      </p>
                      <p
                        onClick={() => {
                          navigate("/boost");
                        }}
                      >
                        <img src="assets/images/shuttle.png" alt="" /> Boost{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
        <Modal
          className="token-list-modal connect-wallet-modal common-modal"
          size="md"
          centered
          show={show}
          onHide={handleClose}
          backdrop="static"
        >
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body>
            <div className="connect-tech-div">
              {/* <h4 className="sub-heading mt-1">Choose Wallet</h4> */}
              <div className="radio-check-row">
                <Form.Group>
                  <Form.Label>Enter Referral Code </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter referral code"
                    onChange={(e) => {
                      setInputRefeffal(e.target.value);
                    }}
                    value={inputReferral}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button
                    className="wallet-btn"
                    onClick={() => {
                      HandelLogin("referral");
                    }}
                  >
                    Continue
                  </button>
                  <button
                    className="wallet-btn"
                    onClick={() => {
                      HandelLogin("skip");
                    }}
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Homepage;
