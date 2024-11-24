// ASYNC/WAIT LESSON

import React, { useState, useEffect } from "react";

function Lesson16() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

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

export default Lesson16;
