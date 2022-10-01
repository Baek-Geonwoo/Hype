import React from "react";
import ReactiveButton from "reactive-button";
import { useNavigate, Outlet } from "react-router-dom";

function Service() {
    let navigate = useNavigate();

    return (
        <div>
            <div className="fadein">
                <h1 className="jb-bold">
                    {" "}
                    쉽고 간단하게<br />
                    지역 상권 확인하기
                </h1>
                <br />
                <br />
                <p> 
                    부동산, 창업 등 상업지역에 대한 데이터 분석이 필요하다면
                </p>
                <p>
                    {" "}
                    아래의 시작 버튼을 눌러 지역상권에 대한 정보를 간편하게 알아보세요.
                </p>
            </div>

            <div className="startButton">
                <ReactiveButton
                    idleText="시작하기"
                    loadingText="Loading"
                    successText="Done"
                    color="blue"
                    size="large"
                    shadow
                    rounded
                    onClick={(e) => {
                        navigate("/location");
                    }}
                />
            </div>
  
            <Outlet></Outlet>

        </div>
    );
}

export default Service;

