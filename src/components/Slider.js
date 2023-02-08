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
            <img
              class="image-thumbnail"
              src="/img/slide0.jpg"
              alt="slide"
            ></img>
          </div>
          <div class="image-box">
            <img
              class="image-thumbnail"
              src="/img/slide1.jpg"
              alt="slide"
            ></img>
          </div>
          <div class="image-box">
            <img
              class="image-thumbnail"
              src="/img/slide2.jpg"
              alt="slide"
            ></img>
          </div>
          <div class="image-box">
            <img
              class="image-thumbnail"
              src="/img/slide3.jpg"
              alt="slide"
            ></img>
          </div>
          <div class="image-box">
            <img
              class="image-thumbnail"
              src="/img/slide4.jpg"
              alt="slide"
            ></img>
          </div>
        </Slider>
      </div>
    );
  }
}
