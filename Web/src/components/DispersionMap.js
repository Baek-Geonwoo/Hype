/*global kakao */
import React, { useEffect } from "react";

function DispersionMap() {
  
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let row = 33.450701;
    let column = 126.570667;
    
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(row, column),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(
      row,
      column
    );

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  };

  return <div id="map" style={{ width: "50vw", height: "40vh" }}></div>;
}

export default DispersionMap;