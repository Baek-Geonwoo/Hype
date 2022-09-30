import React from "react";
import ReactiveButton from "reactive-button";
import { useNavigate } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";

const dataExample = [
  {
    id: "상권1",
    label: "상권1",
    value: 1.9,
    color: "hsl(199, 70%, 50%)",
  },
  {
    id: "상권2",
    label: "상권2",
    value: 28.8,
    color: "hsl(65, 70%, 50%)",
  },
  {
    id: "상권3",
    label: "상권3",
    value: 17.3,
    color: "hsl(135, 70%, 50%)",
  },
  {
    id: "상권4",
    label: "상권4",
    value: 13.5,
    color: "hsl(43, 70%, 50%)",
  },
  {
    id: "상권5",
    label: "상권5",
    value: 9.6,
    color: "hsl(199, 70%, 50%)",
  },
  {
    id: "상권6",
    label: "상권5",
    value: 5.8,
    color: "hsl(199, 70%, 50%)",
  },
  {
    id: "상권7",
    label: "상권5",
    value: 23.1,
    color: "hsl(199, 70%, 50%)",
  },
];

function Piegraph() {
  let navigate = useNavigate();

  return (
    <>
      <div style={{ height: 500 }}>
        <MyResponsivePie />
      </div>
      <div>
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
    </>
  );
}

const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={dataExample}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    startAngle={-70}
    innerRadius={0.35}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "set3" }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
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
    legends={[
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
    ]}
  />
);

export default Piegraph;
