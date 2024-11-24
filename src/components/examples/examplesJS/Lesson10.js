// ARRAY MAP METHOD

import React from "react";

function Lesson10() {
  // data array
  const data = [
    {
      id: 1,
      title: "The Lord of The Rings",
      author: "J. R. R. Tolkien",
    },
    {
      id: 2,
      title: "The Cyberiad",
      author: "Stanislaw Lem",
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
    },
  ];

  function getBooks() {
    return data;
  }

  // example 1
  const array = [1, 2, 3, 4, 5];
  const newArray = [1, 2, 3, 4, 5].map((el) => el * 2);

  // example 2
  const books = getBooks();
  const titles = books.map((book) => book.title);

  return (
    <>
      <div className="example-sub-container">
        <p>Example 1:</p>
        <p>
          Original array:
          <p style={{ color: "var(--clr-grey)" }}>{array.join(", ")}</p>
        </p>
        <p>
          New array:
          <p style={{ color: "var(--clr-grey)" }}>{newArray.join(", ")}</p>
        </p>
      </div>
      <div className="example-sub-container">
        <p>Example 2:</p>
        <p>
          Original array:
          <p style={{ color: "var(--clr-grey)" }}>
            {JSON.stringify(books, null, 2)}
          </p>
        </p>
        <p>
          New array:
          <p style={{ color: "var(--clr-grey)" }}>{titles.join(", ")}</p>
        </p>
      </div>
    </>
  );
}

export default Lesson10;
