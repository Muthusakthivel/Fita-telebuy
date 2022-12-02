import React, {Component} from 'react';
import Header from '../components/header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const HomePage = () => {
    const images = [
        require("../images/h4-slide.png"),
        require("../images/h4-slide2.png"),
        require("../images/h4-slide3.png"),
        require("../images/h4-slide4.png")
    ];     
      return(
        <div>
        <Header></Header>
        <div className="slider-content">
        <Slide>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <div className="caption-group">
                        <h2 className="caption title">
                            iPhone <span className="primary">6 <strong>Plus</strong></span>
                        </h2>
                        <h4 className="caption subtitle">Dual SIM</h4>
                        <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                    </div>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <div className="caption-group">
                          <h2 className="caption title">
                              by one, get one <span className="primary">50% <strong>off</strong></span>
                          </h2>
                          <h4 className="caption subtitle">school supplies & backpacks.*</h4>
                          <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                      </div>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                  <div className="caption-group">
                        <h2 className="caption title">
                            Apple <span className="primary">Store <strong>Ipod</strong></span>
                        </h2>
                        <h4 className="caption subtitle">Select Item</h4>
                        <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                    </div>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                  <div className="caption-group">
                        <h2 className="caption title">
                            Apple <span className="primary">Store <strong>Ipod</strong></span>
                        </h2>
                        <h4 className="caption subtitle">& Phone</h4>
                        <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                    </div>
                  </div>
              </div>
          </Slide>
      </div>
      </div>
      )
      
}
export default HomePage;