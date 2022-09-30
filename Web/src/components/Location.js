import React from "react";
import ReactiveButton from "reactive-button";
import { useState } from "react";
import { hangjungdong } from "./Hangjungdong";
import { useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Location(props) {
    let navigate = useNavigate();

    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const { sido, sigugun, dong } = hangjungdong;

    function sendData(){
      props.setLocation(val1+val2+val3);
    }

    return (
      <div className="location-wrap">
        <div className="loc-title-container">
          <h2 className="location-title">
            <FontAwesomeIcon icon={faLocationDot} size="1x"/>
            <span>지역을 선택해주세요.</span>
          </h2>

          <div className="location-subtitle">
            확인 버튼을 눌러 지도에서 위치를 확인해보세요.
          </div>
        </div>

        <div className="select-container">
          <div className="select-address">
            <select onChange={(e) => setVal1(e.target.value)}>
              <option value="">선택</option>
              {sido.map((el) => (
                <option key={el.sido} value={el.sido}>
                  {el.codeNm}
                </option>
              ))}
            </select>
          </div>

          <div className="select-address">     
            <select onChange={(e) => setVal2(e.target.value)}>
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
            <select onChange={(e) => setVal3(e.target.value)}>
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
        </div>

        <div className="location-map">

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
        
        <Outlet></Outlet>

        
      </div>
    );
}

export default Location;
