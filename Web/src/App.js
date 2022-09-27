import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Row,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        {" "}
        // Navigator(Header)
        <Container>
          <Navbar.Brand href="">
            <img
              classsName="logo"
              src="img/logo.png"
              width="30px"
              height="30px"
            />{" "}
            Hype
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/service");
                }}
              >
                서비스
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/intro");
                }}
              >
                소개
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Service />}></Route>
        <Route
          path="/intro"
          element={
            <>
              <div>소개페이지 입니다.</div>
            </>
          }
        ></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/piegraph" element={<Piegraph />}></Route>
        <Route path="/map" element={<Map />}></Route>

        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  );
}

function Service() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="fadein">
        <h1 className="jb-bold">
          {" "}
          쉽고 간단하게
          <br />
          지역 상권 확인하기
        </h1>
        <br />
        <br />

        <p> 부동산, 창업 등 상업지역에 대한 데이터 분석이 필요하다면</p>
        <p>
          {" "}
          아래의 시작 버튼을 눌러 지역상권에 대한 정보를 간편하게 알아보세요.
        </p>
      </div>
      <div className="startButton">
        <ReactiveButton
          idleText="시작하기"
          loadingText="Loading"
          successText="Done"
          color="blue"
          size="large"
          shadow
          rounded
          onClick={() => {
            navigate("/location");
          }}
        />
      </div>

      <Outlet></Outlet>
    </div>
  );
}
function Location() {
  let navigate = useNavigate();

  return (
    <div>
      location
      <ReactiveButton
        idleText="다음으로"
        loadingText="Loading"
        successText="Done"
        color="blue"
        size="large"
        shadow
        rounded
        onClick={() => {
          navigate("/piegraph");
        }}
      />
      <Outlet></Outlet>
    </div>
  );
}
function Piegraph() {
  let navigate = useNavigate();

  return (
    <div>
      Piegraph
      <ReactiveButton
        idleText="다음으로"
        loadingText="Loading"
        successText="Done"
        color="blue"
        size="large"
        shadow
        rounded
        onClick={() => {
          navigate("/map");
        }}
      />
    </div>
  );
}
function Map() {
  let navigate = useNavigate();

  return (
    <div>
      Map
      <ReactiveButton
        idleText="처음으로"
        loadingText="Loading"
        successText="Done"
        color="blue"
        size="large"
        shadow
        rounded
        onClick={() => {
          navigate("/location");
        }}
      />
    </div>
  );
}

export default App;
