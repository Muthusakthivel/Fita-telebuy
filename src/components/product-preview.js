import React, { Component } from "react";

class ProductPreview extends Component {
  render() {
    return (
      <div className="single-wid-product">
        <a href="single-product.html">
          <img src={require("../images/product-thumb-1.jpg")} alt="" className="product-thumb" />   
        </a>
        <h2>
          <a href="single-product.html">Apple new mac book 2015</a>
        </h2>
        <div className="product-wid-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="product-wid-price">
          <ins>$400.00</ins> <del>$425.00</del>
        </div>
      </div>
    );
  }
}
export default ProductPreview;
