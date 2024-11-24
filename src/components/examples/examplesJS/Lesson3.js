// SPREAD OPERATOR LESSON

import React from "react";

function Lesson3() {
  // data array
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy ",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    },
  ];

  // retreive data from array
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  // destructuring - selecting the data we want to put in the array from the object
  const book = getBook(2);
  const genres = book.genres;

  // spread operator - selecting the array [first attribute] and adding a new value [second attribute]
  const newGenres = [...genres, "epic fantasy"];

  // spread operator - adding an item to the object
  const updatedObject = { ...book, movieAdaptation: "yes", pages: 1200 };
  const movieAdaptation = updatedObject.movieAdaptation;
  const pages = updatedObject.pages;

  return (
    <>
      <div className="example-container">
        <p>
          Adding a new value to the array
          <p style={{ color: "var(--clr-grey)" }}>{newGenres.join(", ")}</p>
        </p>
        <p>
          Adding a new item to the object
          <p style={{ color: "var(--clr-grey)" }}>
            Movie adaptation: {movieAdaptation}
          </p>
        </p>
        <p>
          Overriding a value in the object
          <p style={{ color: "var(--clr-grey)" }}>Number of pages: {pages}</p>
        </p>
      </div>
    </>
  );
}

export default Lesson3;
