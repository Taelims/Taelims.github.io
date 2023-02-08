import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            // eslint-disable-next-line no-restricted-globals
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
function Navba() {
  return (
    <div>
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
    </div>
  );
}

export default Navba;
