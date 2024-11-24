// OPTIONAL CHAINING LESSON

import React, { useState } from "react";

function Lesson9() {
  // data arrat
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "Dune",
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
  ];

  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  const [activeBook, setActiveBook] = useState(2);

  const book = getBook(activeBook);
  const title = book.title;

  // optional chaining ( ?. )
  function getTotalReviewCount(book) {
    const goodread = book.reviews?.goodreads?.reviewsCount;
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
    return goodread + librarything;
  }

  const summary = `${title} has ${getTotalReviewCount(book)} reviews in total`;

  return (
    <>
      <div className="example-container">
        <div
          className="book-btn"
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
        <p>{summary}</p>
      </div>
    </>
  );
}

export default Lesson9;
