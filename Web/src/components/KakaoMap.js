/*global kakao */
import React, { useEffect } from 'react';
const { kakao } = window;

function KakaoMap({location}) {
  console.log(location);
  
  useEffect(() => {
    const container = document.getElementById('myMap');
    let infowindow = new kakao.maps.InfoWindow({zIndex:1});
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 5
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places(); 

    ps.keywordSearch(location, placesSearchCB); 

    function placesSearchCB (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        map.setBounds(bounds);
      } 
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x) 
      });

      kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }
  }, [location]);

    return (
        <div id='myMap' style={{
            width: '50vw', 
            height: '40vh'
        }}></div>
    );
}

export default KakaoMap;