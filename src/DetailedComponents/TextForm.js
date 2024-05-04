import React, { useState } from "react";

export default function TextForm(props) {
  const handlepUClick = () => {
    // console.log("UpperCase clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length > 0) {
      props.show("Converted to uppercase", "success");
    } else {
      props.show("Enter some text ", "info");
    }
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text.length > 0) {
      props.show("Converted to lowercase", "success");
    } else {
      props.show("Enter some text ", "info");
    }
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    if (text.length > 0) {
      props.show("Cleared", "success");
    } else {
      props.show("Enter some text ", "info");
    }
  };

  const handleCapitalizeLClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    if (text.length > 0) {
      props.show("Capitalize done", "success");
    } else {
      props.show("Enter some text ", "info");
    }
  };

  const copyText = () => {
    // let text = document.getElementById("my-box");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    if (text.length > 0) {
      props.show("Copied to clipboard", "success");
    } else {
      props.show("Enter some text ", "info");
    }
  };
  const handelSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length > 0) {
      props.show("space managed", "success");
    } else {
      props.show("Enter some text ", "info");
    }
  };

  const hoc = (event) => {
    // console.log("hoc clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  //text="new text";//wrong way to change the state
  //setText("new text");//correct way to change the state

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === false ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <div>
          <textarea
            className="container"
            id="my-box"
            value={text}
            onChange={hoc}
            style={{
              backgroundColor:
                props.mode === false ? "rgb(171 199 241 / 25%)" : "#0a0a0a",
              color: props.mode === false ? "black" : "white",

              border:
                props.mode === false ? "1px solid black" : "1px solid white",
            }}
            rows="7"
            cols="136"
          ></textarea>
        </div>
        <button className="btn" onClick={handlepUClick}>
          Convert into upper case
        </button>
        <button className="btn" onClick={handleLoClick}>
          Convert into lower case
        </button>
        <button className="btn" onClick={handleClearClick}>
          Clear{" "}
        </button>
        <button className="btn" onClick={handleCapitalizeLClick}>
          Capitalize case
        </button>
        <button className="btn" onClick={copyText}>
          Copy text
        </button>
        <button className="btn" onClick={handelSpace}>
          Remove Extra spaces
        </button>

        <div
          className="container my-3"
          style={{ color: props.mode === false ? "black" : "white" }}
        >
          <h2>YOUR TEXT SUMMARY</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview"}</p>
        </div>
      </div>
    </>
  );
}
