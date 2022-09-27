import "./App.css";
import Service from "./components/Service";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Input from "./components/Input";
import Chart from "./components/Chart";
import Map from "./components/Map";
import Footer from "./components/Footer";
import React from "react";

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Service></Service>
      <Footer></Footer>
    
    </div>
  );
}

export default App;


/*
페이지 이동 이벤트 - 라우트
오류로 인해 수정의 필요성을 느낌 
수정필요 : service 컴포넌트가 중복되어 나타남, 
          다른 컴포넌트로 이동이 되지 않음
          
-> 컴포넌트로의 수정을 하다보니 라우트도 수정이 필요해짐 
곧 수정할 예정

<Routes>
  <Route path="/" element={<Service />}></Route>
  <Route path="/intro" element={<Intro />}></Route>
  <Route path="/service" element={<Service />}></Route>
  <Route path="/input" element={<Input />}></Route>
  <Route path="/chart" element={<Chart />}></Route>
  <Route path="/map" element={<Map />}></Route>

  <Route path="*" element={<div>404</div>}></Route>
</Routes>
*/
