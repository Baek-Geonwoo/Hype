import React from "react";
import ReactiveButton from "reactive-button";
import { useNavigate } from "react-router-dom";

function Chart() {
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

export default Chart; 