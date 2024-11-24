// ARROW FUNCTION LESSON

import React, { useState } from "react";

function Lesson7() {
  // data array
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
    },
  ];

  // getting data from array
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  // change active book
  const [activeBook, setActiveBook] = useState(2);

  // putting data in variable
  const book = getBook(activeBook);

  // destructurising
  const title = book.title;
  const publicationDate = book.publicationDate;

  // arrow function - slicing the year naming convention
  const getYear = (str) => str.split("-")[0];

  // template literal
  const summary = `the book ${title} was written in ${publicationDate}`;
  const summaryWithFunction = `the book ${title} was written in ${getYear(
    publicationDate
  )}`;

  return (
    <>
      <div className="example-container">
        <div
          className="book-btns"
          style={{ width: "100%", display: "flex", gap: "10px" }}
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
          No arrow function<p style={{ color: "var(--clr-grey)" }}>{summary}</p>
        </p>
        <p>
          With arrow function
          <p style={{ color: "var(--clr-grey)" }}>{summaryWithFunction}</p>
        </p>
      </div>
    </>
  );
}

export default Lesson7;
