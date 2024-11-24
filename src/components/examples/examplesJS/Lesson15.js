// ASYNC JS: PROMISES LESSON

import React, { useState, useEffect } from "react";

function Lesson15() {
  const [data, setData] = useState([]); // Initialize as an array

  useEffect(() => {
    // Fetch external API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data)); // Set the data in state
  }, []); // Empty dependency array to run only once on mount

  const titles = data.map((todo) => todo.title);

  return (
    <div className="example-container">
      <p>
        Fetched api:
        {titles.map((title) => (
          <p style={{ fontSize: "12px", color: "var(--clr-grey)" }}>{title}</p>
        ))}
      </p>
    </div>
  );
}

export default Lesson15;
