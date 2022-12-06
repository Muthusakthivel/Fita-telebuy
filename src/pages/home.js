import React from 'react';
import Header from '../components/header';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Product from '../components/product';
import ProductPreview from '../components/product-preview';
import Footer from '../components/footer';


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

      <div class="maincontent-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="latest-product">
                        <h2 class="section-title">Latest Products</h2>
                        <div class="product-carousel">
                        </div>
                    </div>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>
        </div>
    </div>

    <div className="promo-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo1">
                        <i className="fa fa-refresh"></i>
                        <p>30 Days return</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo2">
                        <i className="fa fa-truck"></i>
                        <p>Free shipping</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo3">
                        <i className="fa fa-lock"></i>
                        <p>Secure payments</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo4">
                        <i className="fa fa-gift"></i>
                        <p>New products</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="product-widget-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="single-product-widget">
                        <h2 class="product-wid-title">Top Sellers</h2>
                        <a href="" class="wid-view-more">View All</a>
                        <ProductPreview></ProductPreview>
                        <ProductPreview></ProductPreview>
                        <ProductPreview></ProductPreview>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-product-widget">
                        <h2 class="product-wid-title">Recently Viewed</h2>
                        <a href="#" class="wid-view-more">View All</a>
                        <ProductPreview></ProductPreview>
                        <ProductPreview></ProductPreview>
                        <ProductPreview></ProductPreview>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-product-widget">
                        <h2 class="product-wid-title">Top New</h2>
                        <a href="#" class="wid-view-more">View All</a>
                        <ProductPreview></ProductPreview>
                        <ProductPreview></ProductPreview>
                        <ProductPreview></ProductPreview>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
      </div>
      )
      
}
export default HomePage;