import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div class="image-box">
            <img class="image-thumbnail" src="/img/slide0.jpg"></img>
          </div>
          <div class="image-box">
            <img class="image-thumbnail" src="/img/slide1.jpg"></img>
          </div>
          <div class="image-box">
            <img class="image-thumbnail" src="/img/slide2.jpg"></img>
          </div>
          <div class="image-box">
            <img class="image-thumbnail" src="/img/slide3.jpg"></img>
          </div>
          <div class="image-box">
            <img class="image-thumbnail" src="/img/slide4.jpg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
