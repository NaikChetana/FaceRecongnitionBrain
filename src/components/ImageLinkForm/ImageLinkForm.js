import React, { useState } from "react";
import "./imageLinkForm.css";

export const ImageLinkForm = ({onSubmitClicked}) => {
  const [image, setImage] = useState();
  const inputChange = (event)=>{
    setImage(event.target.value);
  }

  const submitImage = ()=>{
    onSubmitClicked(image)
  }

  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" onChange={inputChange} />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={submitImage}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
