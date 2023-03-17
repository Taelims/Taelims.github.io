import React from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import Axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Join() {
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

    Axios.post("/join", body)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log("실패");
        alert("중복된 아이디입니다");
      });
  };
  return (
    <div>
      <Form className="form" onSubmit={onSubmitHandler}>
        <p className="login-logo">Join</p>
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

        <Button className="join-btn" variant="outline-dark" type="submit">
          가입하기
        </Button>
      </Form>
    </div>
  );
}

export default Join;
