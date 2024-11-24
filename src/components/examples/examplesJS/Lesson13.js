// ARRAY SORT METHOD LESSON

import React from "react";

function Lesson13() {
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

  function getBooks() {
    return data;
  }

  const books = getBooks();

  // function
  const getYear = (str) => str.split("-")[0];

  // mapping and sorting
  const newArray = books.map((book) => ({
    ...book, // spread operator
    year: getYear(book.publicationDate), // adding a new item [year] to the array
  }));

  const newArraySorted = newArray
    .slice() // slicing the array to not mutate the original one
    .sort((a, b) => b.year - a.year);

  return (
    <>
      <div className="example-container">
        <p>Original array before sorting:</p>
        <div className="book-list" style={{ width: "100%" }}>
          {/* mapping the new array */}
          {newArray.map((book) => (
            <p style={{ color: "var(--clr-grey)" }}>
              {book.title} - {book.year}
            </p>
          ))}
        </div>
        <p>Books sorted from newest to oldest:</p>
        <div className="book-list" style={{ width: "100%" }}>
          {/* mapping the new array */}
          {newArraySorted.map((book) => (
            <p style={{ color: "var(--clr-grey)" }}>
              {book.title} - {book.year}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Lesson13;
