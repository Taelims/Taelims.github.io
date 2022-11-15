import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";

function NewProDetail(props) {
  let [tab, tab변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let { id } = useParams();
  let selectPro = props.newPro.find(function (a) {
    return a.id == id;
  });

  let history = useHistory();

  const [Selected, setSelected] = useState("");
  const handleSelect = function (e) {
    setSelected(e.target.value);
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-6">
          <img src={"/img/new" + selectPro.id + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{selectPro.title}</h4>
          <p>{selectPro.content}</p>
          <p>{selectPro.price}원</p>

          <p>
            Size &nbsp;
            <select onChange={handleSelect} value={Selected}>
              <option>사이즈 선택</option>
              {selectPro.size.map(function (a, i) {
                return <option>{selectPro.size[i]}</option>;
              })}
            </select>
          </p>

          <button
            className="btn btn-dark"
            onClick={() => {
              props.dispatch({
                type: "항목추가",
                데이터: {
                  id: selectPro.id,
                  title: selectPro.title,
                  content: selectPro.content,
                  size: Selected,
                  price: selectPro.price,
                  quan: 1,
                },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              tab변경(0);
            }}
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              tab변경(1);
            }}
          >
            상품후기
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} 스위치변경={스위치변경} />
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.tab == 0) {
    return <div></div>;
  } else if (props.tab == 1) {
    return <div></div>;
  }
}

function 함수명(state) {
  return {
    state: state.reducer,
    alert: state.reducer2,
  };
}

export default connect(함수명)(NewProDetail);
