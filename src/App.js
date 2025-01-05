import ParticlesBg from "particles-bg";
import "./App.css";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { Rank } from "./components/Rank/Rank";
import { FaceRecognition } from "./components/FaceRecognition/FaceRecognition";
import { useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState();
  const [boxes, setBoxes] = useState();

  const getRequestOptions = (image) => {
    const PAT = "db505e6e74e3459f8c55309e6cf75815";
    const USER_ID = "nngdmijw5yw5";
    const APP_ID = "face-detect";
    const MODEL_ID = "face-detection";
    const IMAGE_URL = image;
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    return {
      requestOptions,
      MODEL_ID,
    };
  };

  const onSubmit = (image) => {
    console.log('====================================');
    console.log(image);
    console.log('====================================');
    setImageUrl(image);
    const { requestOptions, MODEL_ID } = getRequestOptions(imageUrl);

    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setBoxes([]);
        const regions = result.outputs[0].data.regions;
        regions.forEach((region) => {
          setBoxes([...boxes, calculateFacePosition(region)]);
          console.log('====================================');
          console.log(boxes);
          console.log('====================================');
        });
      })
      .catch((error) => console.log("error", error));
  };

  const calculateFacePosition = (region) => {
    const inputImage = document.getElementById("inputImage");
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
    // Accessing and rounding the bounding box values
    const boundingBox = region.region_info.bounding_box;

    const leftCol = boundingBox.left_col * width;
    const topRow = boundingBox.top_row * height;
    const rightCol = width - boundingBox.right_col * width;

    const bottomRow = height - boundingBox.bottom_row * height;
    return {
      leftCol,
      topRow,
      rightCol,
      bottomRow,
    };
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onSubmitClicked={onSubmit} />
      <p>paste image link to see image</p>
      <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
    </div>
  );
}

export default App;
