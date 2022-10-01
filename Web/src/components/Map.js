import React from "react";
import DispersionMap from "./DispersionMap";
import ReactiveButton from "reactive-button";
import { useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

function Map(props) {
    let navigate = useNavigate();
  
    return (
      <div className="map-wrap">
        
        <div className="map-title-container">
          <h2 className="map-title">
            <FontAwesomeIcon icon={faMap} size="1x"/>
            <span>{props.locationText} 의 상권 분포</span>
          </h2>
        </div>

        <div className="map-content">
          <div className="map-map">
            <DispersionMap location={props.locationText}></DispersionMap>
          </div>  

          <div className="map-container">
            <h4>TOP 3 상권</h4>
            <div>
              <FontAwesomeIcon id="circle1" icon={faCircle} size="1x"/>
              <span>상권 1</span>
            </div>
            <div>
              <FontAwesomeIcon id="circle2" icon={faCircle} size="1x"/>
              <span>상권 2</span>
            </div>
            <div>
              <FontAwesomeIcon id="circle3" icon={faCircle} size="1x"/>
              <span>상권 3</span>
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

export default Map;