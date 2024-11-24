// OPERATIONS ON IMMUTABLE ARRAYS LESSON

import React from "react";

function Lesson14() {
  // data array
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
    },
  ];

  // get data from array
  function getBooks() {
    return data;
  }

  const books = getBooks();

  // 1) add a book object to array
  const newBook = {
    id: 6,
    title: "Origin",
    author: "Dan Brown",
    publicationDate: "2017-10-03",
  };
  const booksAfterAdd = [...books, newBook];

  // 2) delete a book object from array
  const booksAfterDelete = books.filter((book) => book.id !== 3);

  // 3) update a book object in array
  const booksAfterUpdate = books.map((book) =>
    book.id === 1
      ? {
          ...book,
          id: "New id",
          title: "New title",
          author: "New author",
          publicationDate: "yyyy/mm/dd",
        }
      : book
  );

  return (
    <>
      <div className="example-container">
        <p>Original array:</p>
        {data.map((book) => (
          <p style={{ color: "var(--clr-grey)" }}>
            {book.id} - {book.title} - {book.author} - {book.publicationDate}
          </p>
        ))}
        <p>1. Add an object to array:</p>
        {booksAfterAdd.map((book) => (
          <p style={{ color: "var(--clr-grey)" }}>
            {book.id} - {book.title} - {book.author} - {book.publicationDate}
          </p>
        ))}
        <p>2. Delete object from array:</p>
        {booksAfterDelete.map((book) => (
          <p style={{ color: "var(--clr-grey)" }}>
            {book.id} - {book.title} - {book.author} - {book.publicationDate}
          </p>
        ))}
        <p>3. Update object in array:</p>
        {booksAfterUpdate.map((book) => (
          <p style={{ color: "var(--clr-grey)" }}>
            {book.id} - {book.title} - {book.author} - {book.publicationDate}
          </p>
        ))}
      </div>
    </>
  );
}

export default Lesson14;
