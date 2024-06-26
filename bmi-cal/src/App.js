import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // logic massage
      if (bmi < 25) {
        setMessage("You are underweight");
      } else {
        if (bmi >= 25 && bmi < 30) {
          setMessage("You have a healthy weight");
        } else {
          setMessage("You are overweight");
        }
      }
    }
  };

  //show image based on bmi calculation
  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = require("../src/asset/avarta2-removebg-preview.png");
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require("../src/asset/avatr3-removebg-preview (1).png");
    } else {
      imgSrc = require("../src/asset/avarta4-removebg-preview.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container pt-4">
        <h2 className="text-center text-white">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div className="form-widget">
            <div>
              <label className="text-center text-white">Weight (lbs)</label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label className="text-center text-white">Height (in)</label>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="btn">
              <button type="submit" className="btn-1">
                Submit
              </button>
              <div className="btn btn-outline">
                <button
                  type="submit"
                  onClick={reload}
                  className="btn-1 bg-white text-dark"
                >
                  Reload
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="text-center text-white">
          <h3>Your BMI is: {bmi}</h3>
          <p>({message})</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
