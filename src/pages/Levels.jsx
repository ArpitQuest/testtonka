import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import UserData from "../Components/UserData";
import Slider from "react-slick";
import axiosMain from "../http/axios/axios_main";
import useAuth from "../hooks/useAuth";
import level_Data from "../JSON/Point.json";
const levelData = level_Data.levelData;

const Levels = () => {
  const { level_name } = useAuth();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [count, setCount] = useState(0);
  const [showImg, setShowImg] = useState([]);

  useEffect(() => {
    if (levelData?.length > 0) {
      const filterData = levelData?.filter((items, index) => {
        return items.name == level_name;
      });
      console.log("filterData", filterData);
      setCount(filterData[0]?.number);
    }
  }, []);

  const percentage = (count / 12) * 100;

  useEffect(() => {
    getAllLevelData();
  }, []);

  const getAllLevelData = async () => {
    try {
      const getData = await axiosMain.get("/level");
      if (getData?.data?.status) {
        console.log("getData", getData);
        setShowImg(getData?.data?.data);
      }
    } catch (err) {}
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
                  <Slider {...settings} className="level-slider">
                    {showImg?.length > 0
                      ? showImg?.map((items, index) => {
                          return (
                            <div>
                              <div className="tribe-user-profile">
                                <div
                                  className="gradient-background-set"
                                  style={{
                                    backgroundImage: `url(${items?.level_bg_image})`,
                                  }}
                                  //   style={{backgroundImage : url}}
                                ></div>
                                <img
                                  src={items?.level_image}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h3 className="heading-third text-center">
                                  {" "}
                                  My Level - {items?.name}
                                  {items.name == level_name ||
                                  index + 1 <= count ? (
                                    ""
                                  ) : (
                                    <i
                                      className="fa fa-lock locked"
                                      aria-hidden="true"
                                    ></i>
                                  )}
                                </h3>
                                <div className="stats-sec ">
                                  <ul>
                                    <li>
                                      <div className="inner-user d-block">
                                        <h3 className="head-level">
                                          Next Level - Warrior
                                        </h3>
                                        <ProgressBar
                                          variant="success"
                                          now={percentage}
                                        />
                                      </div>
                                      <div className="inner-user">
                                        <img
                                          src="/assets/images/icons/tribe-icon.png"
                                          className="img-fluid user-profile"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                    {/* <div>
                      <div className="tribe-user-profile">
                        <div
                          className="gradient-background-set"
                          Style={{
                            backgroundImage:
                              'url("../images/icons/green-gradient.png")',
                          }}
                        ></div>
                        <img
                          src="/assets/images/icons/earn-tribe-user.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="heading-third text-center">
                          {" "}
                          My Level - Scout{" "}
                          <i
                            className="fa fa-lock locked"
                            aria-hidden="true"
                          ></i>
                        </h3>
                        <div className="stats-sec ">
                          <ul>
                            <li>
                              <div className="inner-user d-block">
                                <h3 className="head-level">
                                  Next Level - Warrior
                                </h3>
                                <ProgressBar variant="success" now={40} />
                              </div>
                              <div className="inner-user">
                                <img
                                  src="/assets/images/icons/tribe-icon.png"
                                  className="img-fluid user-profile"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </Slider>
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

export default Levels;
