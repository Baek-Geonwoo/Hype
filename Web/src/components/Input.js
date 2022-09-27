import React from "react";
import ReactiveButton from "reactive-button";
import { useNavigate, Outlet } from "react-router-dom";

function Input() {
    let navigate = useNavigate();
  
    return (
      <div>
        location
        <ReactiveButton
          idleText="다음으로"
          loadingText="Loading"
          successText="Done"
          color="blue"
          size="large"
          shadow
          rounded
          onClick={() => {
            navigate("/piegraph");
          }}
        />
        <Outlet></Outlet>
      </div>
    );
}

export default Input;
