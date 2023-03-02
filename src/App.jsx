import React, { useState } from "react";
import "./App.css";

function App() {
  const [submit, setsubmit] = useState(false);
  const [rating, setrating] = useState(0);
  const [activeRating, setActiveRating] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });

  const handleSubmit = () => {
    setsubmit(true);
  };

  return (
    <div className="app">
      {submit ? (
        <div className="main2">
          <p className="select">You selected {rating} out of 5</p>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking out time to give us rating. If you ever
            need more support, Don't hesitate to get in touch
          </p>
          <button
            className="back"
            onClick={() => setsubmit((submit) => !submit)}
          >
            🔙
          </button>
        </div>
      ) : (
        <div className="main">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="numbers">
            <li
              className={activeRating.oneStar ? "number active" : "number"}
              value={1}
              onClick={(e) => {
                setrating(e.target.value);
                setActiveRating({
                  oneStar: true,
                  twoStar: false,
                  threeStar: false,
                  fourStar: false,
                  fiveStar: false,
                });
              }}
            >
              1
            </li>
            <li
              className={activeRating.twoStar ? "number active" : "number"}
              value={2}
              onClick={(e) => {
                setrating(e.target.value);
                setActiveRating({
                  oneStar: false,
                  twoStar: true,
                  threeStar: false,
                  fourStar: false,
                  fiveStar: false,
                });
              }}
            >
              2
            </li>
            <li
              className={activeRating.threeStar ? "number active" : "number"}
              value={3}
              onClick={(e) => {
                setrating(e.target.value);
                setActiveRating({
                  oneStar: false,
                  twoStar: false,
                  threeStar: true,
                  fourStar: false,
                  fiveStar: false,
                });
              }}
            >
              3
            </li>
            <li
              className={activeRating.fourStar ? "number active" : "number"}
              value={4}
              onClick={(e) => {
                setrating(e.target.value);
                setActiveRating({
                  oneStar: false,
                  twoStar: false,
                  threeStar: false,
                  fourStar: true,
                  fiveStar: false,
                });
              }}
            >
              4
            </li>
            <li
              className={activeRating.fiveStar ? "number active" : "number"}
              value={5}
              onClick={(e) => {
                setrating(e.target.value);
                setActiveRating({
                  oneStar: false,
                  twoStar: false,
                  threeStar: false,
                  fourStar: false,
                  fiveStar: true,
                });
              }}
            >
              5
            </li>
          </ul>
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
