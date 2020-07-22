import React from 'react';
import Fade from 'react-reveal/Fade';
import img2 from './img/about-img.png';



const HomeTwo = () => {
    return (
        <section class="abtSection" id="abtSection">
            <div className="d-flex align-items-center ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex ">
                                </div>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-colum">
                                    <span className="abtimg"><Fade bottom><img className="img-fluid"   src={img2} alt="about" /></Fade></span>
                                </div>
                                <div class="col-md-6 hdAndText"><Fade bottom><h1 class="h1text">We Are</h1></Fade>
                                <Fade bottom><p>A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery</p></Fade>
                                <div className="a"><Fade bottom><a href="about-us" className="pg_btn">About Us</a></Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeTwo
