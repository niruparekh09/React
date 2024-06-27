import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";
//import './index.css'

export default function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating size={25} color="red" className="test" />
    <Test />
  </React.StrictMode>
);
