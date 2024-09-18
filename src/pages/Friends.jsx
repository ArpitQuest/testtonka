import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import useAuth from "../hooks/useAuth";
import axiosMain from "../http/axios/axios_main";
import toast from "react-hot-toast";
import WebApp from "@twa-dev/sdk";
import { ShareSocial } from "react-share-social";

const Friends = () => {
  const { admin } = useAuth();
  const [userId, setUserId] = useState(null);
  const [showData, setShowData] = useState();
  const [showShareSocial, setShowShareSocial] = useState(false);
  const style = {
    root: {
      padding: "0",
      background: "transparent",
    },
    copyContainer: {
      background: "transparent",
      minHeight: "42px",
    },
    iconContainer: {
      display: "flex",
    },
    title: {
      color: "aquamarine",
      fontStyle: "italic",
    },
    copyUrl: {
      color: "#fff",
      fontWeight: "600",
    },
    copyIcon: {
      background: "#945b3b",
      color: "#fff",
      height: "30px",
      margin: "3px",
      padding: "4px",
      marginBottom: "0",
    },
  };
  const handleShareSocial = () => {
    setShowShareSocial(false);
  };
  useEffect(() => {
    if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const telegramUserId = WebApp.initDataUnsafe.user;
      setUserId(telegramUserId);
    }
  }, []);
  useEffect(() => {
    if (userId?.id) {
      getUserData();
    }
  }, [userId?.id]);
  const getUserData = async () => {
    try {
      const getData = await axiosMain.get(`/referral/${userId?.id}`);
      console.log(getData);

      if (getData?.data?.status) {
        setShowData(getData?.data?.data);
      }
    } catch (err) {}
  };
  return (
    <>
      <div className="outer-mobile-box">
        {/* <Header /> */}
        <section className="">
          <Container>
            <Row>
              <Col>
                <div className="friends-sec">
                  <div className="task-box mb-0">
                    <div className="task-header">
                      <h4 className="orange">Invite & Earn</h4>
                    </div>
                    <div className="task-body">
                      <div className="invite-friend-box">
                        <div className="refer-friend-box">
                          <img
                            src="/assets/images/icons/invite.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <h4>{admin?.referralCode}</h4>
                        </div>
                        <div
                          className="refer-friend-box copy"
                          onClick={() => {
                            navigator.clipboard.writeText(admin?.referralCode);
                            toast.success("Copied");
                          }}
                        >
                          <img
                            src="/assets/images/icons/copy.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div
                          className="refer-friend-box copy"
                          onClick={() => {
                            setShowShareSocial(true);
                          }}
                        >
                          <img
                            src="/assets/images/icons/share.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
                <div className="stats-sec">
                  <ul>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/friend-gift.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>Invite a friend</h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +150,000<span> &nbsp; for you and your friend</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          className="refer-friend-box copy mb-1"
                          onClick={() => {
                            navigator.clipboard.writeText(admin?.referralCode);
                            toast.success("Copied");
                          }}
                        >
                          <img
                            src="/assets/images/icons/copy.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div
                          className="refer-friend-box copy"
                          onClick={() => {
                            setShowShareSocial(true);
                          }}
                        >
                          <img
                            src="/assets/images/icons/share.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/friend-gift.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>Invite 3 friend</h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +150,000<span> &nbsp; for you and your friend</span>
                          </p>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +150,000<span> &nbsp; Bonus For You</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          className="refer-friend-box copy mb-1"
                          onClick={() => {
                            navigator.clipboard.writeText(admin?.referralCode);
                            toast.success("Copied");
                          }}
                        >
                          <img
                            src="/assets/images/icons/copy.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div
                          className="refer-friend-box copy"
                          onClick={() => {
                            setShowShareSocial(true);
                          }}
                        >
                          <img
                            src="/assets/images/icons/share.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/friend-gift.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>Invite 7 friend</h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +150,000<span> &nbsp; for you and your friend</span>
                          </p>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +250,000<span> &nbsp; Bonus For You</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          className="refer-friend-box copy mb-1"
                          onClick={() => {
                            navigator.clipboard.writeText(admin?.referralCode);
                            toast.success("Copied");
                          }}
                        >
                          <img
                            src="/assets/images/icons/copy.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div
                          className="refer-friend-box copy"
                          onClick={() => {
                            setShowShareSocial(true);
                          }}
                        >
                          <img
                            src="/assets/images/icons/share.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/friend-gift.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>Invite 10 friend</h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +150,000<span> &nbsp; for you and your friend</span>
                          </p>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +500,000<span> &nbsp; Bonus For You</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          className="refer-friend-box copy mb-1"
                          onClick={() => {
                            navigator.clipboard.writeText(admin?.referralCode);
                            toast.success("Copied");
                          }}
                        >
                          <img
                            src="/assets/images/icons/copy.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div
                          className="refer-friend-box copy"
                          onClick={() => {
                            setShowShareSocial(true);
                          }}
                        >
                          <img
                            src="/assets/images/icons/share.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-user">
                        <img
                          src="/assets/images/icons/friend-gift.png"
                          className="img-fluid"
                          alt=""
                        />
                        <div className="user-detail">
                          <h4>Invite 15 friend</h4>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +150,000<span> &nbsp; for you and your friend</span>
                          </p>
                          <p>
                            <img
                              src="/assets/images/icons/refer-coin.svg"
                              className="img-fluid"
                              alt=""
                            />
                            +1,000,000<span> &nbsp; Bonus For You</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div
                          className="refer-friend-box copy mb-1"
                          onClick={() => {
                            navigator.clipboard.writeText(admin?.referralCode);
                            toast.success("Copied");
                          }}
                        >
                          <img
                            src="/assets/images/icons/copy.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div
                          className="refer-friend-box copy"
                          onClick={() => {
                            setShowShareSocial(true);
                          }}
                        >
                          <img
                            src="/assets/images/icons/share.svg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* <div>
                    <a className="view-more-friends">View more</a>
                  </div> */}
                </div>
                <div className="stats-sec">
                  <h3 className="heading-third">
                    List of your friends (
                    {showData?.length ? showData?.length : ""})
                  </h3>
                  <ul>
                    {showData?.length > 0 ? (
                      showData?.map((items, index) => {
                        return (
                          <li>
                            <div className="inner-user">
                              <img
                                src="/assets/images/icons/tribe-icon.png"
                                className="img-fluid user-profile"
                                alt=""
                              />
                              <div className="user-detail text-center">
                                <h4 className="text-center">
                                  {items?.first_name}
                                </h4>
                              </div>
                            </div>
                            <div>
                              <div className="user-detail">
                                <p className="text-center">
                                  <img
                                    src="/assets/images/icons/refer-coin.svg"
                                    className="img-fluid mb-1 me-0"
                                    alt=""
                                  />
                                  <br></br>+{items?.points}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })
                    ) : (
                      <li>
                        <div className="inner-user">
                          <div className="user-detail">You have no friends</div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
        <Modal
          show={showShareSocial}
          onHide={handleShareSocial}
          className="token-list-modal connect-wallet-modal common-modal"
          size="md"
          centered
          backdrop="static"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <img
                src="assets/images/trible-img1.png"
                alt=""
                className="img-fluid logo"
              />
              <p className="mt-2">Here are your referral code</p>
              <ShareSocial
                style={style}
                url={`Are you ready for an epic adventure? Use my referral code ${admin?.referralCode} and grab 150,000 bonus coins! Let's team up and conquer together! https://t.me/tonkamini_bot`}
                socialTypes={[
                  "facebook",
                  "twitter",
                  "reddit",
                  "linkedin",
                  "whatsapp",
                ]}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Friends;
