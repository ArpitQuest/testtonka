import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import UserData from "../Components/UserData";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import level_data from "../JSON/Point.json";
const levelData = level_data?.levelData;

const Earn = () => {
  const { level_name } = useAuth();
  const [showImg, setShowImg] = useState([]);
  useEffect(() => {
    if (levelData?.length > 0) {
      const filterData = levelData.filter((items, index) => {
        return items?.name == level_name;
      });
      console.log(filterData);
      setShowImg(filterData[0]);
    }
  }, []);
  const HandleMessage = () => {
    toast.success("Coming soon");
  };
  return (
    <>
      <div className="outer-mobile-box">
        {/* <Header /> */}
        <UserData />
        <section className="">
          <Container>
            <Row>
              <Col>
                <div className="earn-sec">
                  <div className="tribe-user-profile earn-profile">
                    <div
                      className="gradient-background-set"
                      style={{
                        backgroundImage: `url(${showImg?.level_bg_image})`,
                      }}
                      //   style={{backgroundImage : url}}
                    ></div>
                    <img
                      src={showImg?.level_image}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="task-box">
                      <div className="task-header">
                        <h4>Daily Task</h4>
                      </div>
                      <div className="task-body">
                        <table>
                          <tbody>
                            <tr
                              onClick={() => {
                                HandleMessage();
                              }}
                            >
                              <td className="width-check">
                                <Form.Check
                                  aria-label="option 1"
                                  className="check-form"
                                  // checked
                                />
                              </td>
                              <td>
                                <div className=" flex-channel">
                                  <img
                                    src="/assets/images/icons/youtube.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <p>Subscribe Youtube</p>
                                </div>
                              </td>
                              <td>
                                <div className="flex-amount">
                                  <p>+50K</p>
                                  <img
                                    src="/assets/images/icons/amount-coin.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr
                              onClick={() => {
                                HandleMessage();
                              }}
                            >
                              <td className="width-check">
                                <Form.Check
                                  aria-label="option 1"
                                  className="check-form"
                                />
                              </td>
                              <td>
                                <div className=" flex-channel">
                                  <img
                                    src="/assets/images/icons/blog.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <p>Visit Blog</p>
                                </div>
                              </td>
                              <td>
                                <div className="flex-amount">
                                  <p>+35K</p>
                                  <img
                                    src="/assets/images/icons/amount-coin.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr
                              onClick={() => {
                                HandleMessage();
                              }}
                            >
                              <td className="width-check">
                                <Form.Check
                                  aria-label="option 1"
                                  className="check-form white"
                                />
                              </td>
                              <td>
                                <div className=" flex-channel">
                                  <img
                                    src="/assets/images/icons/telegram.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <p>Join Telegram</p>
                                </div>
                              </td>
                              <td>
                                <div className="flex-amount">
                                  <p>+30K</p>
                                  <img
                                    src="/assets/images/icons/amount-coin.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="task-box">
                      <div className="task-header">
                        <h4>Extra Tasks</h4>
                      </div>
                      <div className="task-body">
                        <table>
                          <tbody>
                            <tr
                              onClick={() => {
                                HandleMessage();
                              }}
                            >
                              <td className="width-check">
                                <Form.Check
                                  aria-label="option 1"
                                  className="check-form white"
                                />
                              </td>
                              <td>
                                <div className=" flex-channel">
                                  <img
                                    src="/assets/images/icons/youtube.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <p>Boost Official Channel</p>
                                </div>
                              </td>
                              <td>
                                <div className="flex-amount">
                                  <p>+40K</p>
                                  <img
                                    src="/assets/images/icons/amount-coin.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr
                              onClick={() => {
                                HandleMessage();
                              }}
                            >
                              <td className="width-check">
                                <Form.Check
                                  aria-label="option 1"
                                  className="check-form white"
                                />
                              </td>
                              <td>
                                <div className=" flex-channel">
                                  <img
                                    src="/assets/images/icons/telegram.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <p>Boost Chat Group</p>
                                </div>
                              </td>
                              <td>
                                <div className="flex-amount">
                                  <p>+35K</p>
                                  <img
                                    src="/assets/images/icons/amount-coin.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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

export default Earn;
