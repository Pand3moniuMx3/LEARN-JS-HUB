import React, { useState, useEffect } from "react";
import "./Lesson.css";

// Dynamically import all components from the 'examplesJS' folder
const lessonComponents = {};
const context = require.context(
  "./examples/examplesJS",
  false,
  /Lesson\d+\.js$/
);
context.keys().forEach((key) => {
  const lessonId = key.match(/Lesson(\d+)\.js$/)[1];
  lessonComponents[lessonId] = context(key).default;
});

function LessonJS() {
  const [lessons, setLessons] = useState([]);

  // Fetch the lessons data
  useEffect(() => {
    import("../js-array.json").then((data) => {
      setLessons(data.default);
    });
  }, []);

  return (
    <>
      {lessons.map((lesson) => {
        const LessonComponent = lessonComponents[lesson.id];

        return (
          <section key={lesson.id} className="section" id={lesson.title}>
            <div className="container">
              {/* Title and Definition */}
              <div className="marker-container">
                <span className="marker"></span>
                <span className="verti-line"></span>
              </div>
              <div className="title-container">
                <a
                  style={{ pointerEvents: "none" }}
                  href={lesson.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>{lesson.title}</h2>
                </a>
                <p>{lesson.definition}</p>
              </div>

              {/* Example Explanation and Code Image */}
              <div className="marker-container">
                <span className="marker"></span>
                <span className="verti-line"></span>
              </div>
              <div className="code-container">
                <h3>Example</h3>
                <p>{lesson.exampleExplanation}</p>
                <div className="image-wrapper">
                  <img src={lesson.exampleCode} alt={lesson.title} />
                </div>
              </div>

              <div className="marker-container">
                <span className="marker"></span>
              </div>

              {/* Render the lesson component if it exists */}
              <div className="example-wrapper">
                {LessonComponent ? (
                  <LessonComponent />
                ) : (
                  <p>Example not available</p>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default LessonJS;
