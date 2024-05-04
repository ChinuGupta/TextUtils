// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  //   });

  // const [btntext, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.backgroundColor === "white") {
  //     setMyStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //       border: "1px solid white",
  //     })
  //     setBtnText("Enable Light Mode");
  //   } 
  //   else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid black",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  return (
    <div className="container my-3"   style={{
      backgroundColor:
        props.mode === false ? "rgb(171 199 241 / 25%)" : "#0a0a0a",
      color: props.mode === false ? "black" : "white",

      border:
        props.mode === false ? "1px solid black" : "1px solid white",
    }}>

      <h1>About Us</h1>


      <div  
        className="accordion"
        id="accordionPanelsStayOpenExample"
        style={{
          backgroundColor:
            props.mode === false ? "rgb(171 199 241 / 25%)" : "#0a0a0a",
          color: props.mode === false ? "black" : "white",
    
          border:
            props.mode === false ? "1px solid black" : "1px solid white",
        }}
        //style={myStyle}
        
      >
        <div className="accordion-item"> 
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={{
                backgroundColor:
                  props.mode === false ? "rgb(171 199 241 / 25%)" : "#0a0a0a",
                color: props.mode === false ? "black" : "white",
          
                border:
                  props.mode === false ? "1px solid black" : "1px solid white",
              }}
             // style={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div   
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
           
            <div className="accordion-body"  style={{
      backgroundColor:
        props.mode === false ? "rgb(171 199 241 / 25%)" : "#0a0a0a",
      color: props.mode === false ? "black" : "white",

    }} >
              It is a Simple Text Analyzer , which mutilates your text, but in a
              tender way.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={{
                backgroundColor:
                  props.mode === false ? "rgb(171 199 241 / 25%)" : "#0a0a0a",
                color: props.mode === false ? "black" : "white",
          
                border:
                  props.mode === false ? "1px solid black" : "1px solid white",
              }}
              // style={myStyle}
            >
              <strong>Free to use and Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
           >
            <div className="accordion-body"  style={{
      backgroundColor:
        props.mode === false ? "rgb(171 199 241 / 25%)" : "#0a0a0a",
      color: props.mode === false ? "black" : "white",

    }}>
              It is completely free to use. No credit cards required. Use as
              much as you want and it is compatible with all of your favorite
              browsers.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        {/* <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btntext}
        </button> */}
      </div>
    </div>
  );
}
