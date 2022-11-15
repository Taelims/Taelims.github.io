/* eslint-disable */
// "proxy":"http://localhost:8079",
import React, { useState } from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";

import newProData from "./newProData.js";
import BestProData from "./bestProData.js";
import BestProData2 from "./bestProData2.js";

import NewProDetail from "./components/NewProDetail.js";
import BestProDetail from "./components/BestProDetail.js";
import BestPro2Detail from "./components/BestPro2Detail.js";

import Cart from "./components/Cart.js";
import Login from "./components/Login.js";
import Mypage from "./components/Mypage.js";
import Fail from "./components/Fail.js";
import Join from "./components/Join.js";
import AuthRoute from "./AuthRoute.js";
import Slider from "./components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  let [newPro, newPro변경] = useState(newProData);
  let [bestPro, bestPro변경] = useState(BestProData);
  let [bestPro2, bestPro2변경] = useState(BestProData2);
  let [btn, btn변경] = useState(true);
  let [tab, tab변경] = useState(0);

  function isLogin() {
    if (localStorage.getItem(1)) {
      console.log("로그인 성공");
      return (
        <Nav.Link>
          <Link
            className="none"
            to="/login"
            onClick={() => {
              localStorage.clear();
              location.reload();
            }}
          >
            Logout
          </Link>
        </Nav.Link>
      );
    } else {
      console.log("로그인 실패");
      return (
        <Nav.Link>
          <Link className="none" to="/login">
            Login
          </Link>
        </Nav.Link>
      );
    }
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand>
          <Link to="/" className="logo">
            Shoelim
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            {isLogin()}
            <Nav.Link>
              <Link className="none" to="/mypage">
                MyPage
              </Link>
            </Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/">
        <Slider></Slider>

        <div>
          <h2 className="mt-5">New In</h2>
          <div className="row">
            {newPro.map(function (a, i) {
              return <NewProduct newPro={newPro[i]} i={i}></NewProduct>;
            })}
          </div>
          <div className="container">
            {btn == true ? (
              <button
                className="btn btn-outline-dark"
                onClick={() => {
                  axios
                    .get("/newpro")
                    .then((result) => {
                      let newProCopy = newPro;
                      for (let i = 0; i < result.data.data.length; i++) {
                        newProCopy.push(result.data.data[i]);
                      }
                      newPro변경(newProCopy);
                      btn변경(false);
                    })
                    .catch(() => {
                      console.log("실패");
                    });
                }}
              >
                더보기
              </button>
            ) : null}
          </div>
        </div>
        <div>
          <h2 className="mt-5">Best seller</h2>
          <Nav className="mt-5 tab" variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  tab변경(0);
                }}
              >
                런닝화
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  tab변경(1);
                }}
              >
                구두
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <TabContent tab={tab} bestPro={bestPro} bestPro2={bestPro2} />
        </div>
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

      <div className="footer"></div>
    </div>
  );
}

function TabContent(props) {
  if (props.tab == 0) {
    return (
      <div className="row">
        {props.bestPro.map(function (a, i) {
          return <BestProduct1 bestPro={props.bestPro[i]} i={i}></BestProduct1>;
        })}
      </div>
    );
  } else if (props.tab == 1) {
    return (
      <div className="row">
        {props.bestPro2.map(function (a, i) {
          return (
            <BestProduct2 bestPro2={props.bestPro2[i]} i={i}></BestProduct2>
          );
        })}
      </div>
    );
  }
}

function NewProduct(props) {
  let history = useHistory();
  return (
    <div
      className="col-md-3"
      onClick={() => {
        history.push("/newprodetail/" + props.newPro.id);
      }}
    >
      <img src={"/img/new" + props.i + ".jpg"} width="50%"></img>
      <h6>
        <strong>{props.newPro.title}</strong>
      </h6>
      <h6>{props.newPro.content}</h6>
      <p>{props.newPro.price}원</p>
    </div>
  );
}

function BestProduct1(props) {
  let history = useHistory();
  return (
    <div
      className="col-md-3"
      onClick={() => {
        history.push("/bestprodetail/" + props.bestPro.id);
      }}
    >
      <img src={"/img/bestPro" + props.bestPro.id + ".jpg"} width="50%"></img>
      <h6>
        <strong>{props.bestPro.title}</strong>
      </h6>
      <h6>{props.bestPro.content}</h6>
      <p>{props.bestPro.price}원</p>
    </div>
  );
}

function BestProduct2(props) {
  let history = useHistory();
  return (
    <div
      className="col-md-3"
      onClick={() => {
        history.push("/bestpro2detail/" + props.bestPro2.id);
      }}
    >
      <img src={"/img/bestPro" + props.bestPro2.id + ".jpg"} width="50%"></img>
      <h6>
        <strong>{props.bestPro2.title}</strong>
      </h6>
      <h6>{props.bestPro2.content}</h6>
      <p>{props.bestPro2.price}</p>
    </div>
  );
}

export default App;
