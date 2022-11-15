import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthRoute(props) {
  function isLogin() {
    if (localStorage.getItem(1)) {
      console.log("로그인 성공");
      return true;
    } else {
      console.log("로그인 실패");
      return false;
    }
  }
  return (
    <Route
      render={() =>
        isLogin() ? <Redirect to="/mypage" /> : <Redirect to="/" />
      }
    />
  );
}
