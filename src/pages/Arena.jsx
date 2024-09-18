import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import UserData from '../Components/UserData';

const Arena = () => {
    return (
        <>

            <div className="outer-mobile-box">
                {/* <Header /> */}
                <UserData/>
                <section className="">
                    <Container>
                        <Row>
                            <Col>
                                <div className='earn-sec'>
                                    <div className='tribe-user-profile'>
                                        <img src="/assets/images/icons/earn-tribe-user.png" className='img-fluid' alt="" />
                                    </div>

                                    {/*=============== on click new box appear ==========*/}
                                    <div>
                                        <h3 className='heading-third'><img src="/assets/images/icons/war-point.png" className='img-fluid' alt="" /> War Points</h3>
                                        <div className='stats-sec '>
                                            <ul>
                                                <li>
                                                    <div className='inner-user'>
                                                        <img src="/assets/images/icons/tribe-icon.png" className='img-fluid user-profile' alt="" />
                                                        <div className='user-detail'>
                                                            <h4>
                                                                <img src="/assets/images/icons/tribe-user.png" className='img-fluid' alt="" />
                                                                User ID:203847
                                                            </h4>
                                                            <p>
                                                                <img src="/assets/images/icons/refer-coin.svg" className='img-fluid' alt="" />
                                                                2300
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h2>1</h2>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='inner-user'>
                                                        <img src="/assets/images/icons/tribe-icon.png" className='img-fluid user-profile' alt="" />
                                                        <div className='user-detail'>
                                                            <h4>
                                                                <img src="/assets/images/icons/tribe-user.png" className='img-fluid' alt="" />
                                                                User ID:203847
                                                            </h4>
                                                            <p>
                                                                <img src="/assets/images/icons/refer-coin.svg" className='img-fluid' alt="" />
                                                                2300
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h2>1</h2>
                                                    </div>
                                                </li>
                                            </ul>
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
    )
}

export default Arena
