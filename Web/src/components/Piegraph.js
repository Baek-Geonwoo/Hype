import React, { Fragment } from "react";
import ReactiveButton from "reactive-button";
import { useNavigate } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data/pie.json";

let piedata = JSON.parse(JSON.stringify(data));

//console.log(piedata);

function Piegraph(props) {
  let navigate = useNavigate();
  var index = piedata.findIndex((i) => i.dong_code == props.locationCode);

  const dataExample = [
    {
      id: piedata[index]["t1"],
      label: piedata[index]["t1"],
      value: (parseFloat(piedata[index]["t1_ratio"]) * 100).toFixed(2),
      color: "hsl(199, 70%, 50%)",
    },
    {
      id: piedata[index]["t2"],
      label: piedata[index]["t2"],
      value: (parseFloat(piedata[index]["t2_ratio"]) * 100).toFixed(2),
      color: "hsl(65, 70%, 50%)",
    },
    {
      id: piedata[index]["t3"],
      label: piedata[index]["t3"],
      value: (parseFloat(piedata[index]["t3_ratio"]) * 100).toFixed(2),
      color: "hsl(135, 70%, 50%)",
    },
    {
      id: piedata[index]["t4"],
      label: piedata[index]["t4"],
      value: (parseFloat(piedata[index]["t4_ratio"]) * 100).toFixed(2),
      color: "hsl(43, 70%, 50%)",
    },
    {
      id: piedata[index]["t5"],
      label: piedata[index]["t5"],
      value: (parseFloat(piedata[index]["t5_ratio"]) * 100).toFixed(2),
      color: "hsl(199, 70%, 50%)",
    },
  ];

  const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
      data={dataExample}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-70}
      innerRadius={0.35}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "set3" }}
      borderWidth={0}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={0}
      arcLinkLabelsDiagonalLength={3}
      motionConfig={"wobbly"}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      /*legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}*/
    />
  );

  return (
    <>
      <div style={{ marginTop: 50 }}>
        <div className="loc-title-container">
          <h2 className="location-title">
            <FontAwesomeIcon icon={faLocationDot} size="1x" />
            <span>{props.locationText} 의 상위 상권 분석</span>
          </h2>
        </div>
      </div>

      <Container>
        <Row>
          <Col sm={6}>
            <div style={{ width: 450, height: 450 }}>
              <MyResponsivePie />
            </div>
          </Col>
          <Col sm={4}>
            <div className="inverted-border-radius">
              <div>
                가장 높은 순위는{" "}
                {(parseFloat(piedata[index]["t1_ratio"]) * 100).toFixed(2)}%로{" "}
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  {piedata[index]["t1"]}
                </span>{" "}
                이고, <br />
                가장 낮은 순위는{" "}
                {(parseFloat(piedata[index]["t5_ratio"]) * 100).toFixed(
                  2
                )}%로{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {piedata[index]["t5"]}
                </span>{" "}
                입니다.
              </div>
            </div>
            <div className="inverted-border-radius" style={{ height: 300 }}>
              <h6 style={{ fontWeight: "bold", fontSize: 20 }}>TOP 3</h6>
              <div style={{ margin: 10 }}>
                {piedata[index]["t1"]}의 업종분야
              </div>
              <Container>
                <Row xs="auto">
                  <div className="inner_box">{piedata[index]["t1_t1"]}</div>
                  <div className="inner_box">{piedata[index]["t1_t2"]}</div>
                  <div className="inner_box">{piedata[index]["t1_t3"]}</div>
                </Row>
              </Container>
              <div style={{ margin: 10 }}>
                {piedata[index]["t2"]}의 업종분야
              </div>
              <Container>
                <Row xs="auto">
                  <div className="inner_box">{piedata[index]["t2_t1"]}</div>
                  <div className="inner_box">{piedata[index]["t2_t2"]}</div>
                  <div className="inner_box">{piedata[index]["t2_t3"]}</div>
                </Row>
              </Container>
              <div style={{ margin: 10 }}>
                {piedata[index]["t3"]}의 업종분야
              </div>
              <Container>
                <Row xs="auto">
                  <div className="inner_box">{piedata[index]["t3_t1"]}</div>
                  <div className="inner_box">{piedata[index]["t3_t2"]}</div>
                  <div className="inner_box">{piedata[index]["t3_t3"]}</div>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Container>
          <ReactiveButton
            idleText="이전"
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

          <ReactiveButton
            idleText="다음"
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
        </Container>
      </div>
    </>
  );
}

export default Piegraph;
