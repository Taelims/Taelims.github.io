/* eslint-disable */
// "proxy":"http://localhost:8079",
import React, { useState } from "react";
import { Route } from "react-router-dom";

import newProData from "./data/newProData.js";
import BestProData from "./data/bestProData.js";
import BestProData2 from "./data/bestProData2.js";

import NewProDetail from "./pages/NewProDetail.js";
import BestProDetail from "./pages/BestProDetail.js";
import BestPro2Detail from "./pages/BestPro2Detail.js";

import Navba from "./components/Navbar";
import Slider from "./components/Slider";

import Home from "./pages/Home";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";
import Mypage from "./pages/Mypage.js";
import Fail from "./pages/Fail.js";
import Join from "./pages/Join.js";

import AuthRoute from "./pages/AuthRoute.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let [newPro, newPro변경] = useState(newProData);
  let [bestPro, bestPro변경] = useState(BestProData);
  let [bestPro2, bestPro2변경] = useState(BestProData2);
  let [btn, btn변경] = useState(true);
  let [tab, tab변경] = useState(0);

  return (
    <div className="App">
      <Navba></Navba>

      <Route exact path="/">
        <Slider></Slider>

        <Home></Home>
      </Route>

      <Route path="/newprodetail/:id">
        <NewProDetail newPro={newPro} />
      </Route>

      <Route path="/bestprodetail/:id">
        <BestProDetail bestPro={bestPro} />
      </Route>

      <Route path="/bestpro2detail/:id">
        <BestPro2Detail bestPro2={bestPro2} />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/mypage">
        <Mypage />
      </Route>

      <Route path="/fail">
        <Fail />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/mypage">
        <AuthRoute />
      </Route>

      <Route path="/join">
        <Join />
      </Route>
    </div>
  );
}

export default App;
