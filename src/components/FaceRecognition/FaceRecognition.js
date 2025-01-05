import React from "react";
import "./FaceRecognition.css";

export const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt="detect"
          width="500px"
          height="auto"
        />
        {boxes && boxes.length ? (
          boxes.map((box, i) => (
            <div
              key={box + i}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                left: box.leftCol,
                bottom: box.bottomRow,
              }}
            ></div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
