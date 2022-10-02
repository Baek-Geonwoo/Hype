/*global kakao */
import React, { useEffect } from "react";
import data from "../data/map.json";

let mapdata = JSON.parse(JSON.stringify(data));

const { kakao } = window;

function DispersionMap(props) {
  var index = mapdata.findIndex((i) => i.행정동코드 == props.locationCode);
  //console.log("index는" + index);

  useEffect(() => {
    const container = document.getElementById("myMap");
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(props.locationText, placesSearchCB);

    var loc_data = [
      [mapdata[index]["Top1_1lng"], mapdata[index]["Top1_1lat"]],
      [mapdata[index]["Top1_2lng"], mapdata[index]["Top1_2lat"]],
      [mapdata[index]["Top1_3lng"], mapdata[index]["Top1_3lat"]],
      [mapdata[index]["Top1_4lng"], mapdata[index]["Top1_4lat"]],
      [mapdata[index]["Top1_5lng"], mapdata[index]["Top1_5lat"]],
      [mapdata[index]["Top1_6lng"], mapdata[index]["Top1_6lat"]],
      [mapdata[index]["Top1_7lng"], mapdata[index]["Top1_7lat"]],
      [mapdata[index]["Top1_8lng"], mapdata[index]["Top1_8lat"]],
      [mapdata[index]["Top1_9lng"], mapdata[index]["Top1_9lat"]],
      [mapdata[index]["Top1_10lng"], mapdata[index]["Top1_10lat"]],
    ];

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < loc_data.length; i++) {
          displayMarker(loc_data[i]);
          bounds.extend(new kakao.maps.LatLng(loc_data[i][0], loc_data[i][1]));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [props.locationText]);

  return (
    <div
      id="myMap"
      style={{
        width: "50vw",
        height: "40vh",
      }}
    ></div>
  );
}

export default DispersionMap;
