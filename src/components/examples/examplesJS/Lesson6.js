// TEMPLATE LITERALS

import React, { useState } from "react";

function Lesson5() {
  // data array
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      pages: 1216,
    },
    {
      id: 2,
      title: "The Cyberiad",
      pages: 295,
    },
    {
      id: 3,
      title: "Dune",
      pages: 658,
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      pages: 223,
    },
    {
      id: 5,
      title: "A Game of Thrones",
      pages: 835,
    },
  ];

  // retreiving data from array
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  // change active book
  const [activeBook, setActiveBook] = useState(2);

  // put array data into variable
  const book = getBook(activeBook);

  // destructure
  const pages = book.pages;
  const title = book.title;

  // ternary operator
  const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";

  // template literal
  const summary = `${title} has ${pagesRange} pages.`;

  return (
    <>
      <div className="example-container">
        <div
          style={{ width: "100%", display: "flex", gap: "10px" }}
          className="book-btns"
        >
          {data.map((book) => (
            <button
              style={{ flexGrow: "1" }}
              onClick={() => setActiveBook(book.id)}
            >
              {book.title}
            </button>
          ))}
        </div>
        <p>
          Number of pages:
          <p style={{ color: "var(--clr-grey)" }}>{pages}</p>
        </p>
        <p>
          Ternary operator:
          <p style={{ color: "var(--clr-grey)" }}>{summary}</p>
        </p>
      </div>
    </>
  );
}

export default Lesson5;
