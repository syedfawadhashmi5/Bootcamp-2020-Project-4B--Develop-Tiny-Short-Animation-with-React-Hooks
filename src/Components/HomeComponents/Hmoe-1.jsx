import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Fade';


import img1 from './img/career-img.png';



const HomeOne = () => {
  return (
    <div className="d-flex align-items-center bannerSec">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-colum">
              <div className="text-daf">
              <Fade bottom><img src={img1}  className="img-fluid" alt='imge-1' /></Fade>
              </div>
            </div>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex ">
              <div className="text-dif">
              <Zoom bottom><h1>Innovative and </h1></Zoom>
              <Zoom bottom><h2>intelligent technology </h2></Zoom>
              <Zoom bottom><h2>solutions and services </h2></Zoom>
              <Zoom bottom><p>Staff Augmentation </p></Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomeOne
