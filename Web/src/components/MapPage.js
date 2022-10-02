import React from "react";
import DispersionMap from "./DispersionMap";
import ReactiveButton from "reactive-button";
import { useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import data from "../data/map.json";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const { kakao } = window;

let mapdata = JSON.parse(JSON.stringify(data));

function MapPage(props) {
  let navigate = useNavigate();
  let index = mapdata.findIndex(
    (i) => i.행정동코드 == props.locationCode + "00"
  );

  const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];

  return (
    <div className="map-wrap">
      <div className="map-title-container">
        <h2 className="map-title">
          <FontAwesomeIcon icon={faMap} size="1x" />
          <span>{props.locationText} 의 상권 분포</span>
        </h2>
      </div>

      <div className="map-content">
        <div className="map-map">
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: 33.450701,
              lng: 126.570667,
            }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "450px",
            }}
            level={3} // 지도의 확대 레벨
          >
            {positions.map((position, index) => (
              <MapMarker
                key={`${position.title}-${position.latlng}`}
                position={position.latlng} // 마커를 표시할 위치
                image={{
                  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              />
            ))}
          </Map>
        </div>

        <div className="map-container">
          <h4>TOP 3 상권</h4>
          <div>
            <FontAwesomeIcon id="circle1" icon={faCircle} size="1x" />
            <span>{mapdata[index]["Top1"]}</span>
          </div>
          <div>
            <FontAwesomeIcon id="circle2" icon={faCircle} size="1x" />
            <span>{mapdata[index]["Top2"]}</span>
          </div>
          <div>
            <FontAwesomeIcon id="circle3" icon={faCircle} size="1x" />
            <span>{mapdata[index]["Top3"]}</span>
          </div>
        </div>
      </div>

      <div className="replayBtn">
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
      <Outlet></Outlet>
    </div>
  );
}

export default MapPage;
