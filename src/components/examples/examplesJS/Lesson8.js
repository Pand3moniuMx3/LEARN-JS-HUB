// SHORT-CIRCUITING AND LOGICAL OPERATORS

import React, { useState } from "react";

function Lesson8() {
  // data array
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      translations: {},
    },
    {
      id: 3,
      title: "Dune",
      translations: {
        spanish: "",
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
    },
    {
      id: 5,
      title: "The Game of Thrones",
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
    },
  ];

  // retreive data from array
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  // change active book
  const [activeBook, setActiveBook] = useState(2);

  // put data into variable
  const book = getBook(activeBook);

  // end operator
  const falsyValue = undefined && "second string";
  const trueyValue = "first string" && "second string";

  // or operator
  const falsyValue2 = undefined || "second string";
  const trueyValue2 = "first string" || "second string";

  // example
  const title = book.title; // destructurising
  const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"; // or operator
  const summary = `${title} in Spanish is "${spanishTranslation}"`; // template literal

  return (
    <>
      <div className="example-container">
        <p>
          End operator: falsy first value - truey first value
          <p style={{ color: "var(--clr-grey)" }}>
            {falsyValue} - {trueyValue}
          </p>
        </p>
        <p>
          Or operator: falsy first value - truey first value
          <p style={{ color: "var(--clr-grey)" }}>
            {falsyValue2} - {trueyValue2}
          </p>
        </p>
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
          Example on data array:
          <p style={{ color: "var(--clr-grey)" }}>{summary}</p>
        </p>
      </div>
    </>
  );
}

export default Lesson8;
