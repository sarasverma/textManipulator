import React, { useState } from "react";

// text is the variable and only setText can be used to manipulate it.
// don't need to create setText function
export default function TextBox() {
  const [text, setText] = useState("Enter your text here");

  function onClickButton() {
    let resultText = text.toUpperCase();
    setText(resultText);
  }
  function onchangeHandler(event) {
    console.log("On change");
    setText(event.target.value);
  }
  return (
    <div className="mb-3 my-4">
      <label htmlFor="textbox" className="form-label">
        <h1>Put your text here to ..</h1>
      </label>
      <textarea
        className="form-control"
        value={text}
        onChange={onchangeHandler}
        id="textbox"
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-2" onClick={onClickButton}>
        Uppecase
      </button>
    </div>
  );
}
