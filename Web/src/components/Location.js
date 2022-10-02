import React from "react";
import ReactiveButton from "reactive-button";
import KakaoMap from "./KakaoMap";
import { useState } from "react";
import { hangjungdong } from "./Hangjungdong";
import { useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Location(props) {
  let navigate = useNavigate();

  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [loc1, setLoc1] = useState("");
  const [loc2, setLoc2] = useState("");
  const [loc3, setLoc3] = useState("");
  const [place, setPlace] = useState("");
  const { sido, sigugun, dong } = hangjungdong;

  function selectText() {
    let sidoSelect = document.getElementById("sido");
    let sigugunSelect = document.getElementById("sigugun");
    let dongSelect = document.getElementById("dong");

    let sidoText = sidoSelect.options[sidoSelect.selectedIndex].text;
    let sigugunText = sigugunSelect.options[sigugunSelect.selectedIndex].text;
    let dongText = dongSelect.options[dongSelect.selectedIndex].text;

    setLoc1(sidoText);
    setLoc2(sigugunText);
    setLoc3(dongText);
    setPlace(sidoText + " " + sigugunText + " " + dongText);
  }

  function sendData() {
    props.setLocationText(loc1 + " " + loc2 + " " + loc3);
    props.setLocationCode(val1 + val2 + val3);
  }

  return (
    <div className="location-wrap">
      <div className="loc-title-container">
        <h2 className="location-title">
          <FontAwesomeIcon icon={faLocationDot} size="1x" />
          <span>지역을 선택해주세요.</span>
        </h2>

        <div className="location-subtitle">
          어느 지역의 상권을 분석해보고 싶으신가요?
        </div>
      </div>

      <div className="location-container">
        <div className="select-container">
          <div className="select-address">
            <select
              id="sido"
              onChange={(e) => {
                setVal1(e.target.value);
              }}
            >
              <option value="">선택</option>
              {sido.map((el) => (
                <option key={el.sido} value={el.sido}>
                  {el.codeNm}
                </option>
              ))}
            </select>
          </div>

          <div className="select-address">
            <select
              id="sigugun"
              onChange={(e) => {
                setVal2(e.target.value);
              }}
            >
              <option value="">선택</option>
              {sigugun
                .filter((el) => el.sido === val1)
                .map((el) => (
                  <option key={el.sigugun} value={el.sigugun}>
                    {el.codeNm}
                  </option>
                ))}
            </select>
          </div>

          <div className="select-address">
            <select
              id="dong"
              onChange={(e) => {
                setVal3(e.target.value);
                selectText();
              }}
            >
              <option value="">선택</option>
              {dong
                .filter((el) => el.sido === val1 && el.sigugun === val2)
                .map((el) => (
                  <option key={el.dong} value={el.dong}>
                    {el.codeNm}
                  </option>
                ))}
            </select>
          </div>

          <div className="nextBtn">
            <ReactiveButton
              idleText="확인"
              loadingText="Loading"
              successText="Done"
              color="blue"
              size="large"
              shadow
              rounded
              onClick={() => {
                navigate("/piegraph");
                sendData();
              }}
            />
          </div>
        </div>

        <div className="location-map">
          {place && <KakaoMap location={place}></KakaoMap>}
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default Location;
