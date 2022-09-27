import React from "react";
import ReactiveButton from "reactive-button";
import { useNavigate } from "react-router-dom";

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

export default Map;