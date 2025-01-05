import React from "react";
import "./FaceRecognition.css";

export const FaceRecognition = ({ image, boxes }) => {
  if (image) {
    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputImage"
            src={image}
            alt="detect"
            width="500px"
            height="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: boxes[0].topRow,
              right: boxes[0].rightCol,
              left: boxes[0].leftCol,
              bottom: boxes[0].bottomRow,
            }}
          ></div>
        </div>
      </div>
    );
  }
  return <></>;
};
