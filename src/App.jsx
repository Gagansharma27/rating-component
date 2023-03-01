import React, { useState } from "react";
import "./App.css";

function App() {
  const [submit, setsubmit] = useState(false);
  const [rating, setrating] = useState(0);

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
              className="number"
              value={1}
              onClick={(e) => {
                setrating(e.target.value);
                e.currentTarget.classList.toggle("active");
              }}
            >
              1
            </li>
            <li
              className="number"
              value={2}
              onClick={(e) => {
                setrating(e.target.value);
                e.currentTarget.classList.toggle("active");
              }}
            >
              2
            </li>
            <li
              className="number"
              value={3}
              onClick={(e) => {
                setrating(e.target.value);
                e.currentTarget.classList.toggle("active");
              }}
            >
              3
            </li>
            <li
              className="number"
              value={4}
              onClick={(e) => {
                setrating(e.target.value);
                e.currentTarget.classList.toggle("active");
              }}
            >
              4
            </li>
            <li
              className="number"
              value={5}
              onClick={(e) => {
                setrating(e.target.value);
                e.currentTarget.classList.toggle("active");
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
