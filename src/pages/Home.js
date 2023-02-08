import React, { useState } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import newProData from "../data/newProData";
import bestProData from "../data/bestProData";
import bestProData2 from "../data/bestProData2";
import Footer from "../components/Footer";

const Home = () => {
  let [newPro, newPro변경] = useState(newProData);
  let [bestPro, bestPro변경] = useState(bestProData);
  let [bestPro2, bestPro2변경] = useState(bestProData2);
  let [btn, btn변경] = useState(true);
  let [tab, tab변경] = useState(0);
  return (
    <div>
      <div>
        <h2 className="mt-5">New In</h2>
        <div className="row">
          {newPro.map(function (a, i) {
            return <NewProduct newPro={newPro[i]} i={i}></NewProduct>;
          })}
        </div>
        <div className="container">
          {btn === true ? (
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
      <Footer></Footer>
    </div>
  );
};

function TabContent(props) {
  if (props.tab === 0) {
    return (
      <div className="row">
        {props.bestPro.map(function (a, i) {
          return <BestProduct1 bestPro={props.bestPro[i]} i={i}></BestProduct1>;
        })}
      </div>
    );
  } else if (props.tab === 1) {
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
      <img src={"/img/new" + props.i + ".jpg"} width="50%" alt=""></img>
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
      <img
        src={"/img/bestPro" + props.bestPro.id + ".jpg"}
        width="50%"
        alt=""
      ></img>
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
      <img
        src={"/img/bestPro" + props.bestPro2.id + ".jpg"}
        width="50%"
        alt=""
      ></img>
      <h6>
        <strong>{props.bestPro2.title}</strong>
      </h6>
      <h6>{props.bestPro2.content}</h6>
      <p>{props.bestPro2.price}</p>
    </div>
  );
}

export default Home;
