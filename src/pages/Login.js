/* eslint no-restricted-globals: ["off"] */

import Axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../App.css";

function Login(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      id: Email,
      pw: Password,
    };

    Axios.post("/login", body)
      .then((response) => {
        history.push("/");
        Axios.post("/mypage").then((response) => {
          console.log(response.data);
          if (response.data.data === "로그인") {
            localStorage.setItem(1, response.data.res);
            location.reload();
          }
        });
      })
      .catch((error) => {
        console.log("실패");
        alert("이메일 또는 비밀번호를 확인해주세요");
      });
  };

  return (
    <div>
      <Form className="form" onSubmit={onSubmitHandler}>
        <p className="login-logo">Login</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control
            type="text"
            value={Email}
            onChange={onEmailHandler}
            placeholder="Enter ID"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          className="login-btn btn btn-dark"
          variant="primary"
          type="submit"
        >
          로그인
        </Button>
        <Button
          className="join-btn"
          variant="outline-dark"
          onClick={() => history.push("/join")}
        >
          회원가입
        </Button>
      </Form>
    </div>
  );
}
export default Login;
