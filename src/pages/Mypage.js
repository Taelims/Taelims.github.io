import React from "react";
import "../App.css";

function Mypage() {
  localStorage.getItem(1);

  return (
    <div className="form">
      <p>{localStorage.getItem(1)}님의 마이페이지</p>
    </div>
  );
}
export default Mypage;
