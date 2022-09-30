import React from "react";
import ReactiveButton from "reactive-button";
import { useNavigate } from "react-router-dom";

function Piegraph(props) {
    let navigate = useNavigate();

    /* 
    입력값을 행정코드로 전달 
    코드 : props.location
    */
    return (
      <div>
        입력받은 주소 코드 :
        {props.location}
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

export default Piegraph; 