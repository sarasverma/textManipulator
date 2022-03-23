import React, { useState } from "react";

// text is the variable and only setText can be used to manipulate it.
// don't need to create setText function
export default function TextBox(props) {
  const [text, setText] = useState("Enter your text here");

  // fuction that can be performed on text
  // always to make this function as const
  function onClickUpper() {
    let resultText = text.toUpperCase();
    setText(resultText);
    props.alert("Converted to uppercase !", "success");
  }
  function onClickLower() {
    let resultText = text.toLowerCase();
    setText(resultText);
    props.alert("Converted to lowercase !", "success");
  }
  function onchangeHandler(event) {
    console.log("On change");
    setText(event.target.value);
  }
  return (
    <>
      <div className="mb-3 my-4">
        <label htmlFor="textbox" className="form-labeltext">
          <h1
            className={`form-label text-${
              props.mode === "light" ? "dark" : "white"
            }`}
          >
            Put your text here to ..
          </h1>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={onchangeHandler}
          id="textbox"
          rows="8"
          // for style we need to pass a object
          style={
            props.mode === "dark"
              ? { "background-color": "grey", color: "white" }
              : { "background-color": "white", color: "black" }
          }
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={onClickUpper}>
          Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={onClickLower}>
          Lowercase
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Summary</h3>
        <p>{`${text.split(" ").length} words and ${text.length} characters`}</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
