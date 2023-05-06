import React from "react";
import "../src/style.css";
function App() {
  var today = new Date();
  var curHr = today.getHours();
  let result = "";

  if (curHr < 12) {
    result = "GOOD MORNING";
  } else if (curHr < 18) {
    result = "GOOD AFTERNOON";
  } else {
    result = "GOOD EVENING";
  }

  setInterval(updateTime, 1000);

  let hour = new Date().getHours();
  let seconds = new Date().getMinutes();
  let ampm = hour >= 12 ? "pm" : "am";
  let time = hour + ":" + seconds + ampm;
  const [currentTime, setCurrentTime] = React.useState(time);

  function updateTime() {
    let hour = new Date().getHours();
    let seconds = new Date().getMinutes();
    let ampm = hour >= 12 ? "pm" : "am";
    let newTime = hour + ":" + seconds + ampm;
    setCurrentTime(newTime);
  }
  return (
    <div>
      <h1>{result}, IT'S CURRENTLY</h1>
      <p className="time">{currentTime}</p>
      <h3>IN PONDICHERRY, INDIA</h3>
    </div>
  );
}

export default App;
