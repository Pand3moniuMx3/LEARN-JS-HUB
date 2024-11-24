import React, { useState } from "react";

function Lesson11() {
  // data array
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
    },
    {
      id: 2,
      title: "The Cyberiad",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
    },
    {
      id: 3,
      title: "Dune",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
    },
    {
      id: 5,
      title: "A Game of Thrones",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
    },
  ];

  // retreiving data from array
  function getBooks() {
    return data; //.find((d) => d.id === id);
  }

  // put data into variable
  const books = getBooks();

  // change condition
  const [pagesLimit, setPagesLimit] = useState(500);
  const [genre, setGenre] = useState("");

  // filter method - filter out books with over [pageLimit] pages
  const longBooks = books
    .filter((book) => book.pages > pagesLimit && book.hasMovieAdaptation)
    .map((book) => book.title);

  const adventureBooks = books
    .filter((books) => books.genres.includes(genre))
    .map((book) => book.title);

  return (
    <>
      <div className="example-container">
        <div
          className="book-btns"
          style={{ width: "100%", display: "flex", gap: "10px" }}
        >
          <button onClick={() => setPagesLimit(0)} style={{ flexGrow: "1" }}>
            All
          </button>
          <button onClick={() => setPagesLimit(300)} style={{ flexGrow: "1" }}>
            300
          </button>
          <button onClick={() => setPagesLimit(500)} style={{ flexGrow: "1" }}>
            500
          </button>
          <button onClick={() => setPagesLimit(750)} style={{ flexGrow: "1" }}>
            750
          </button>
          <button onClick={() => setPagesLimit(1000)} style={{ flexGrow: "1" }}>
            1000
          </button>
        </div>
        <p>
          Filtering books with over {pagesLimit} pages that have a movie
          adaptation:
          <p style={{ color: "var(--clr-grey)" }}>{longBooks.join(", ")}</p>
        </p>
        <div
          className="book-btns"
          style={{ width: "100%", display: "flex", gap: "10px" }}
        >
          <button
            onClick={() => setGenre("adventure")}
            style={{ flexGrow: "1" }}
          >
            Adventure
          </button>
          <button onClick={() => setGenre("fantasy")} style={{ flexGrow: "1" }}>
            Fantasy
          </button>
          <button onClick={() => setGenre("novel")} style={{ flexGrow: "1" }}>
            Novel
          </button>
        </div>
        <p>
          Filtering books from {genre} category:
          <p style={{ color: "var(--clr-grey)" }}>
            {adventureBooks.join(", ")}
          </p>
        </p>
      </div>
    </>
  );
}

export default Lesson11;
