import React from "react";

function App() {
   
const now = new Date().toLocaleTimeString();
  const [time,inc] = React.useState(now);

  function gettime(){
    const nown = new Date().toLocaleTimeString();
    inc(nown);
  }

setInterval(gettime,1000);

  return (
    <div className="container">
      <h1>{time} </h1>
      <button onClick={gettime}></button>
    </div>
  );
}

export default App;
