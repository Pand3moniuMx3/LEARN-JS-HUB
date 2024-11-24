// FETCH LESSON

import React, { useState } from "react";
import "../../Lesson.css";

function Lesson4() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <>
      <div className="example-container">
        <p style={{ textAlign: "center" }}>{advice}</p>
        <button onClick={getAdvice}>Get Advice</button>
        <p style={{ textAlign: "center" }}>you have clicked {count} times</p>
      </div>
    </>
  );
}

export default Lesson4;
